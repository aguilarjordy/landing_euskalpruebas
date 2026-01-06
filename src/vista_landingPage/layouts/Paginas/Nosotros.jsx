import React from "react";
import SectoresSlider from "../../componentes/SectoresSlider/SectoresSlider";

export default function Nosotros() {
  return (
    <div style={{ 
      maxWidth: "1000px", 
      margin: "0 auto", 
      padding: "20px 20px", // Reducido el padding superior para móviles
      display: "flex", 
      flexDirection: "column", 
      gap: "40px" // Gap más ajustado
    }}>
      
      {/* SECCIÓN: ACERCA DE NOSOTROS */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        alignItems: "center", 
        gap: "30px",
        justifyContent: "center" 
      }}>
        
        {/* Texto: Ajustado minWidth y fontSize dinámico */}
        <div style={{ 
          flex: "1 1 300px", // Cambiado de flex: 1 a flex-grow/shrink con base de 300px
          minWidth: "unset", // Eliminado el minWidth de 500px que rompía el móvil
          maxWidth: "100%" 
        }} data-aos="fade-right">
          <h2 style={{ 
            color: "#0D5F7D", 
            fontSize: "clamp(28px, 5vw, 42px)", // Fuente fluida según pantalla
            marginBottom: "25px",
            textAlign: "left"
          }}>
            Acerca de Nosotros
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "15px" }}>
            En <strong>Euskal Perú</strong>, nos apasiona transformar la forma en que las empresas 
            manejan el izaje y la manipulación de cargas pesadas.
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "15px" }}>
            Contamos con una sólida trayectoria en el mercado, posicionándonos como referentes 
            gracias a la calidad de nuestros productos.
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#333" }}>
            Nos respaldan nuestra experiencia y conocimiento como expertos en asesoría, comercialización
            y mantenimiento de accesorios para izaje de carga, enfocados en ofrecer productos 
            confiables y soporte técnico especializado.
          </p>
        </div>

        {/* Imagen: Asegurada que no exceda el ancho en móviles */}
        <div style={{ 
          flex: "1 1 300px", 
          textAlign: "center",
          maxWidth: "100%" 
        }} data-aos="fade-left">
          <img 
            src="/imageneSliderNosotros/AcercaNosotros.svg" 
            alt="Acerca de Nosotros" 
            style={{ 
              width: "100%", 
              maxWidth: "500px", 
              height: "auto", // Mantiene proporción
              borderRadius: "10px" 
            }} 
          />
        </div>
      </div>

      {/* SECCIÓN: TARJETAS (MISIÓN, VISIÓN, ETC) */}
      <div style={{ 
        width: "100%", 
        margin: "0 auto", 
        padding: "20px 0" 
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Grid responsivo
          gap: "20px" 
        }}>
          {[
            { title: "Misión", text: "Importamos y distribuimos equipos industriales, ofreciendo mantenimiento especializado y asesoría técnica en accesorios de izaje." },
            { title: "Visión", text: "Ser referente industrial reconocido por la calidad, confiabilidad y especialización en soluciones de izaje de carga." },
            { title: "Seguridad", text: "Cada producto cumple con los más altos estándares de seguridad." },
            { title: "Calidad", text: "Garantizamos que cada equipo sea confiable, duradero y eficiente." }
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              style={{ 
                padding: "25px", 
                background: "linear-gradient(145deg, #ffffff, #f0f8ff)", 
                borderRadius: "20px", 
                textAlign: "center", 
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)", 
                transition: "transform 0.3s, box-shadow 0.3s", 
                cursor: "default" 
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = "translateY(-5px)"; 
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)"; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = "translateY(0)"; 
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)"; 
              }}
            >
              <h3 style={{ color: "#0D5F7D", marginBottom: "12px", fontWeight: "700", fontSize: "20px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: "1.5", color: "#555", margin: 0 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN: SECTORES SLIDER */}
      <div style={{ textAlign: "center", paddingBottom: "40px" }} data-aos="fade-up">
        <h2 style={{ 
          color: "#0D5F7D", 
          fontSize: "clamp(24px, 5vw, 32px)", 
          marginBottom: "30px" 
        }}>
          Sectores
        </h2>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <SectoresSlider />
        </div>
      </div>
      
    </div>
  );
}