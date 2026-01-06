import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuración de iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MapaContactanos() {
  const posicion = [-12.056123, -77.062728]; // coordenadas de la dirección

  return (
    <div style={{ width: "100%", padding: "20px 0", boxSizing: "border-box" }}>
      <h2 style={{ 
        fontSize: "clamp(24px, 6vw, 32px)", 
        color: "#0D5F7D", 
        textAlign: "center", 
        margin: "20px 0",
        padding: "0 10px"
      }}>
        Nuestra Ubicación
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap", // Permite que los elementos se apilen en móviles
          justifyContent: "center",
          alignItems: "stretch",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Lado izquierdo: Información de contacto */}
        <div
          style={{
            flex: "1 1 300px", // Base de 300px, pero puede crecer
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxSizing: "border-box",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>Contáctanos</h3>
          <p style={{ margin: 0 }}>
            <strong>Dirección:</strong>
            <br />
            Cal. Norberto Haro Andaluza Nro. 2535 Dpto. 502, Lima, Perú
          </p>
          <p style={{ margin: 0 }}>
            <strong>Teléfono:</strong>
            <br />
            +51 987 654 321
          </p>
          <p style={{ margin: 0 }}>
            <strong>Correo:</strong>
            <br />
            contacto@euskalperu.com
          </p>
          <p style={{ margin: 0 }}>
            <strong>Horario:</strong>
            <br />
            Lunes a Viernes, 8:00 am - 18:00 pm
          </p>
        </div>

        {/* Lado derecho: Mapa */}
        <div
          style={{
            flex: "1 1 300px", // Toma el mismo peso que el texto en móviles
            minHeight: "350px", // Asegura que el mapa sea visible en celulares
            width: "100%",      // Ocupa todo el ancho del contenedor padre
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            zIndex: 1
          }}
        >
          <MapContainer
            center={posicion}
            zoom={16}
            style={{ width: "100%", height: "100%", minHeight: "350px" }}
            keyboard={false}
            scrollWheelZoom={false} // Evita bloqueos al hacer scroll en móvil
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={posicion}>
              <Popup>Cal. Norberto Haro Andaluza 2535, Lima, Perú</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}