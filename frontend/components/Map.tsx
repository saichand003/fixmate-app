// frontend/components/Map.tsx

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// ✅ Create a custom icon to avoid mutating Leaflet defaults
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Mechanic = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

type Props = {
  mechanics: Mechanic[];
};

export default function Map({ mechanics }: Props) {
  const center = mechanics.length
    ? [mechanics[0].latitude, mechanics[0].longitude]
    : [40.748817, -73.985428]; // Default: NYC

  useEffect(() => {
    // Ensure Leaflet CSS is loaded (for Next.js SSR cases)
    import("leaflet/dist/leaflet.css");
  }, []);

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={center as [number, number]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mechanics.map((m) => (
          <Marker key={m.id} position={[m.latitude, m.longitude]} icon={customIcon}>
            <Popup>{m.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
