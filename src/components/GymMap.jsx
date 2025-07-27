import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2Fvc2ktYW5pa3dlIiwiYSI6ImNtZGhyeWRjcjA0ZGkya3F5eDVodzN6cDkifQ.RC6HClU7sKj0sb-o0SRiuQ";

export default function GymMap({ gymData, onGymSelect }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const selectedGymIdRef = useRef(null);
  const markersRef = useRef({});

  const [selectedGymId, setSelectedGymId] = useState(null);

  // Keep ref in sync with state
  useEffect(() => {
    selectedGymIdRef.current = selectedGymId;
    updateMarkers(); // Update after change
  }, [selectedGymId]);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.4083, 6.8646],
    });

    const bounds = new mapboxgl.LngLatBounds();

    // 🏋️ Add all gym markers
    gymData.forEach((gym) => {
      const el = document.createElement("div");
      el.className = "gym-marker";
      el.style.backgroundColor = "#2196f3";
      el.style.color = "#fff";
      el.style.padding = "4px 8px";
      el.style.borderRadius = "6px";
      el.style.fontSize = "12px";
      el.style.fontWeight = "bold";
      el.style.cursor = "pointer";
      el.textContent = gym.name;

      const marker = new mapboxgl.Marker(el)
        .setLngLat(gym.coordinates)
        .addTo(map.current);

      el.addEventListener("click", () => {
        setSelectedGymId(gym.id);
        if (onGymSelect) onGymSelect(gym);
      });

      markersRef.current[gym.id] = { el, marker };
      bounds.extend(gym.coordinates);
    });

    // 📍 Add user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userCoords = [longitude, latitude];

        const userEl = document.createElement("div");
        userEl.style.width = "14px";
        userEl.style.height = "14px";
        userEl.style.backgroundColor = "#4caf50";
        userEl.style.border = "2px solid white";
        userEl.style.borderRadius = "50%";
        userEl.title = "Your Current Location";

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="color: black; font-weight: bold;">Your Current Location</div>`
        );

        new mapboxgl.Marker(userEl)
          .setLngLat(userCoords)
          .setPopup(popup)
          .addTo(map.current);

        bounds.extend(userCoords);
        map.current.fitBounds(bounds, { padding: 60 });
      },
      () => {
        map.current.fitBounds(bounds, { padding: 60 });
      }
    );
  }, [gymData, onGymSelect]);

  // ✅ Updates marker styles after any gym selection
  function updateMarkers() {
    Object.entries(markersRef.current).forEach(([gymId, { el }]) => {
      const isSelected = parseInt(gymId) === selectedGymIdRef.current;
      el.style.backgroundColor = isSelected ? "red" : "#2196f3";
      el.style.color = "#fff";
    });
  }

  return (
    <div style={{ display: "flex", height: "500px" }}>
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
