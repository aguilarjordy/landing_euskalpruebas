import ProductosCards from "../../componentes/componenteServicio/ProductosCards";
import ServiciosCards from "../../componentes/componenteServicio/ServiciosCards";
import "./Productospagina.css";

export default function ProductosyServiciosPagina() {
  const secciones = [
    { titulo: "Izaje de Carga", id: "Izaje" },
    { titulo: "Trincaje y Anclaje", id: "Trincaje" },
    { titulo: "Estructuras y Coberturas", id: "Estructuras" },
    { titulo: "Seguridad y Apoyo Industrial", id: "Seguridad" },
    { titulo: "Construcción", id: "Construcción" },
    { titulo: "Cabos y Cuerdas", id: "Cabos" }
  ];

  return (
    <section className="pagina-productos-global">
      
      {/* SECCIONES DE PRODUCTOS */}
      {secciones.map((sec, index) => (
        <div 
          key={index} 
          className={`seccion-producto ${index % 2 !== 0 ? "seccion-intercalada" : ""}`}
        >
          <div className="contenedor-centrado" data-aos="fade-up">
            <h2 style={{ 
              color: "#0D5F7D", 
              borderLeft: "5px solid #D98400", 
              paddingLeft: "15px", 
              marginBottom: "30px",
              textTransform: "uppercase",
              fontSize: "24px",
              fontWeight: "700"
            }}>
              {sec.titulo}
            </h2>
            
            <ProductosCards modo="slider" categoria={sec.id} />
          </div>
        </div>
      ))}

      {/* SECCIÓN DE SERVICIOS (Intercalada automáticamente) */}
      <div className={`seccion-producto ${secciones.length % 2 !== 0 ? "seccion-intercalada" : ""}`}>
        <div className="contenedor-centrado" data-aos="zoom-in">
            <h2 className="titulo-servicios-final">
               Nuestros Servicios Especializados
            </h2>
            
            {/* Aquí cargamos tus ServiciosCards */}
            <ServiciosCards />
        </div>
      </div>

    </section>
  );
}