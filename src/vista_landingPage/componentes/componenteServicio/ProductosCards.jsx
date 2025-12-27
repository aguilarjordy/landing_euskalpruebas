import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function ProductosCards({ modo = "slider", categoria = "Todos" }) {
  const [modal, setModal] = useState({ abierto: false, item: null });

  const todosLosProductos = [
    // Izaje de carga
    { nombre: "Cables de acero", categoria: "Izaje", descripcion: "Cables de acero de alta resistencia para todo tipo de izaje y sujeción industrial.", imagen: "/imagenesServicios/CablesAcero.svg" },
    { nombre: "Cadenas y accesorios de acero", categoria: "Izaje", descripcion: "Cadenas y accesorios de acero de máxima durabilidad para sujeción y maniobras industriales.", imagen: "/imagenesServicios/cadenasAcero.svg" },
    { nombre: "Grilletes", categoria: "Izaje", descripcion: "Grilletes de acero de alta resistencia, esenciales para izaje y trincaje seguro.", imagen: "/imagenesServicios/Grilletes.svg" },
    { nombre: "Estrobos", categoria: "Izaje", descripcion: "Estrobos de seguridad, flexibles y resistentes para operaciones de carga confiables.", imagen: "/imagenesServicios/Estrobos.svg" },
    { nombre: "Slingas y fajas de poliéster", categoria: "Izaje", descripcion: "Slingas y fajas de poliéster flexibles y resistentes para transporte de cargas.", imagen: "/imagenesServicios/SlingasFajasPoliester.svg" },
    { nombre: "Tecles y equipos manuales", categoria: "Izaje", descripcion: "Tecles y equipos manuales para izaje y maniobras de carga con total control.", imagen: "/imagenesServicios/TeclesEquiposManuales.svg" },
    
    // Trincaje y anclaje
    { nombre: "Accesorios de trincaje", categoria: "Trincaje", descripcion: "Accesorios para asegurar cargas de manera confiable y segura durante transporte o maniobras.", imagen: "/imagenesServicios/AccesoriosTrincaje.svg" },
    { nombre: "Accesorios para anclaje", categoria: "Trincaje", descripcion: "Sistemas de anclaje y fijación industrial resistentes y duraderos.", imagen: "/imagenesServicios/AccesoriosAnclaje.svg" },
    { nombre: "Fajas Ratchet", categoria: "Trincaje", descripcion: "Fajas con mecanismo ratchet, perfectas para sujetar cargas de manera firme y segura.", imagen: "/imagenesServicios/FajasRatchet.svg" },
    
    // Estructuras y coberturas
    { nombre: "Estructuras metálicas", categoria: "Estructuras", descripcion: "Estructuras metálicas de alta resistencia, diseñadas para soportar cargas industriales.", imagen: "/imagenesServicios/EstructurasMetal.svg" },
    { nombre: "Coberturas plásticas", categoria: "Estructuras", descripcion: "Coberturas plásticas resistentes para protección y almacenamiento seguro.", imagen: "/imagenesServicios/CoberturasPlasticas.svg" },
    
    // Seguridad y apoyo
    { nombre: "Equipos de protección personal", categoria: "Seguridad", descripcion: "Equipos de seguridad industrial para proteger a los trabajadores en todo momento.", imagen: "/imagenesServicios/Epp.svg" },
    { nombre: "Escaleras", categoria: "Seguridad", descripcion: "Escaleras industriales resistentes, seguras y duraderas para acceso en altura.", imagen: "/imagenesServicios/Escaleras.svg" },
    { nombre: "Equipos electrónicos", categoria: "Seguridad", descripcion: "Equipos electrónicos industriales para control y medición en operaciones diversas.", imagen: "/imagenesServicios/ProductosElectronicos.svg" },
    
    // Construcción
    { nombre: "Accesorios para construcción", categoria: "Construcción", descripcion: "Pallets, Canastilla para personal, Soluciones para su proyecto.", imagen: "/imagenesServicios/AccesoriosConstruccion.svg" },
    
    // Cabos y cuerdas
    { nombre: "Cabos y drizas", categoria: "Cabos", descripcion: "Cabos y drizas de alta calidad (Nylon, Poliéster, Polipropileno) para izaje y maniobras.", imagen: "/imagenesServicios/CabosDrizas.svg" },
  ];

  const productosFiltrados = categoria === "Todos" 
    ? todosLosProductos 
    : todosLosProductos.filter(p => p.categoria === categoria);

  const abrirModal = (item) => setModal({ abierto: true, item });
  const cerrarModal = () => setModal({ abierto: false, item: null });
  const cotizar = (n) => window.open(`https://wa.me/51993105161?text=Hola, quiero cotizar: ${n}`, "_blank");

  const renderCards = (items) => items.map((item, index) => (
    <div key={index} data-aos="fade-up" style={{
      width: "280px", borderRadius: "15px", padding: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex", flexDirection: "column", cursor: "pointer", transition: "all 0.3s ease",
      height: "100%", backgroundColor: "#fff", border: "1px solid #eee"
    }} onClick={() => abrirModal(item)}
       onMouseEnter={(e) => {
         e.currentTarget.style.transform = "translateY(-5px)";
         e.currentTarget.querySelector("h3").style.color = "#D98400";
       }}
       onMouseLeave={(e) => {
         e.currentTarget.style.transform = "translateY(0)";
         e.currentTarget.querySelector("h3").style.color = "#0D5F7D";
       }}
    >
      <div style={{ width: "100%", height: "160px", backgroundColor: "#f9f9f9", borderRadius: "10px", marginBottom: "10px", overflow: "hidden" }}>
        <img src={item.imagen} alt={item.nombre} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "10px" }} />
      </div>
      <h3 style={{ margin: "0 0 8px 0", color: "#0D5F7D", fontSize: "17px", transition: "0.3s" }}>{item.nombre}</h3>
      <p style={{ fontSize: "13px", color: "#666", flexGrow: 1, lineHeight: "1.4", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{item.descripcion}</p>
      <button onClick={(e) => { e.stopPropagation(); cotizar(item.nombre); }} style={{ marginTop: "12px", padding: "10px", backgroundColor: "#0D5F7D", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", transition: "0.3s" }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#D98400")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0D5F7D")}
      >Cotizar</button>
    </div>
  ));

  return (
    <section style={{ 
      maxWidth: "1200px", // 🔥 Esto evita que se estire en el Inicio
      margin: "0 auto",   // 🔥 Centra el slider
      padding: "0 20px",
      width: "100%"
    }}>
      {modo === "slider" ? (
        <div className="productos-slider-custom" style={{ 
          display: "flex", 
          gap: "25px", 
          overflowX: "auto", 
          padding: "10px 5px 25px 5px", 
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch"
        }}>
          {renderCards(productosFiltrados).map((card, i) => (
            <div key={i} style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}>{card}</div>
          ))}
        </div>
      ) : (
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "30px", 
          justifyItems: "center" 
        }}>
          {renderCards(productosFiltrados)}
        </div>
      )}

      <style>{`
        .productos-slider-custom::-webkit-scrollbar { height: 8px; }
        .productos-slider-custom::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .productos-slider-custom::-webkit-scrollbar-thumb { background: #0D5F7D; border-radius: 10px; }
        .productos-slider-custom::-webkit-scrollbar-thumb:hover { background: #D98400; }
      `}</style>

      {/* MODAL CON CREATE PORTAL */}
      {modal.abierto && modal.item && createPortal(
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, backdropFilter: "blur(4px)" }} onClick={cerrarModal}>
          <div style={{ width: "90%", maxWidth: "800px", backgroundColor: "#fff", borderRadius: "15px", display: "flex", flexWrap: "wrap", overflow: "hidden" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ flex: "1 1 350px", background: "#f8f8f8" }}>
              <img src={modal.item.imagen} alt={modal.item.nombre} style={{ width: "100%", height: "100%", objectFit: "contain", minHeight: "300px" }} />
            </div>
            <div style={{ flex: "1 1 300px", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
              <h2 style={{ color: "#0D5F7D", margin: 0 }}>{modal.item.nombre}</h2>
              <p style={{ color: "#444", lineHeight: "1.6" }}>{modal.item.descripcion}</p>
              <button onClick={() => cotizar(modal.item.nombre)} style={{ padding: "12px", backgroundColor: "#0D5F7D", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Cotizar por WhatsApp</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}