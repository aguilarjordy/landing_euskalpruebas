import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Para que el marcador se vea correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MapaContactanos() {
  const posicion = [-12.056123, -77.062728]; // coordenadas de la dirección

  return (
    <>
    <h2 style={{  fontSize: "32px", color: "#0D5F7D", textAlign: "center", margin: "10px 0" }}>Nuestra Ubicación</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        flexWrap: "wrap",
        padding: "40px 20px",
      }}
    >
        
      {/* Lado izquierdo */}
      <div
        style={{
          flex: "0 0 300px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "300px",
          boxSizing: "border-box",
          marginTop: "55px",
        }}
      >
        <h2>Contáctanos</h2>
        <p>
          <strong>Dirección:</strong>
          <br />
          Cal. Norberto Haro Andaluza Nro. 2535 Dpto. 502, Lima, Perú
        </p>
        <p>
          <strong>Teléfono:</strong>
          <br />
          +51 987 654 321
        </p>
        <p>
          <strong>Correo:</strong>
          <br />
          contacto@euskalperu.com
        </p>
        <p>
          <strong>Horario:</strong>
          <br />
          Lunes a Viernes, 8:00 am - 18:00 pm
        </p>
      </div>

      {/* Lado derecho: mapa con marcador */}
      <div
        style={{
          flex: 1,
          maxWidth: "800px",
          borderRadius: "10px",
          overflow: "hidden",
          height: "450px",
        }}
      >
        <MapContainer
          center={posicion}
          zoom={16}
          style={{ width: "100%", height: "100%" }}
          keyboard={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={posicion}>
            <Popup>Cal. Norberto Haro Andaluza 2535, Lima, Perú</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    
    </>
  );
}