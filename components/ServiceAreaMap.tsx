"use client";

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/site-config";

export default function ServiceAreaMap() {
  const center: [number, number] = [site.latitude, site.longitude];

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false}
      className="service-area-map h-full w-full"
      attributionControl={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle
        center={center}
        radius={site.serviceRadiusMiles * 1609.34}
        pathOptions={{
          color: "#5b6b60",
          weight: 1.5,
          fillOpacity: 0,
          dashArray: "4 6",
        }}
      />
    </MapContainer>
  );
}
