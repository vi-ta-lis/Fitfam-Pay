// src/components/MapView.jsx
import React from "react";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapView({ lat, lon }) {
  return (
    <div style={{ height: "400px", width: "100%", marginTop: "1rem" }}>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2Fvc2ktYW5pa3dlIiwiYSI6ImNtZGhyeWRjcjA0ZGkya3F5eDVodzN6cDkifQ.RC6HClU7sKj0sb-o0SRiuQ"
        initialViewState={{
          latitude: lat,
          longitude: lon,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker latitude={lat} longitude={lon} color="red" />
      </Map>
    </div>
  );
}

export default MapView;
