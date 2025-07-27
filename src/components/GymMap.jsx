import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2Fvc2ktYW5pa3dlIiwiYSI6ImNtZGhyeWRjcjA0ZGkya3F5eDVodzN6cDkifQ.RC6HClU7sKj0sb-o0SRiuQ";

export default function GymMap({ gymData }) {
  const [_, setUserLocation] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.4083, 6.8646],
      // zoom: 20,
    });

    const bounds = new mapboxgl.LngLatBounds();

    // 🏋️ Plot gyms
    gymData.forEach((gym) => {
      const el = document.createElement("div");
      el.className = "gym-marker";
      el.style.backgroundColor = "#2196f3";
      el.style.color = "#fff";
      el.style.padding = "4px 8px";
      el.style.borderRadius = "6px";
      el.style.fontSize = "12px";
      el.style.fontWeight = "bold";
      el.textContent = gym.name;

      new mapboxgl.Marker(el).setLngLat(gym.coordinates).addTo(map.current);

      bounds.extend(gym.coordinates);
    });

    // 📍 Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userCoords = [longitude, latitude];
        setUserLocation(userCoords);

        const userEl = document.createElement("div");
        userEl.className = "user-marker";
        userEl.style.width = "14px";
        userEl.style.height = "14px";
        userEl.style.color = "#000";
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
      (error) => {
        console.error("Error getting user location:", error);
        map.current.fitBounds(bounds, { padding: 60 });
      }
    );
  }, [gymData]);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
