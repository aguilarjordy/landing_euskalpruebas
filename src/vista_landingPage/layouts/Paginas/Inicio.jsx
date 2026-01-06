import ProductosCards from "../../componentes/componenteServicio/ProductosCards"
import SectoresSlider from "../../componentes/SectoresSlider/SectoresSlider";
import ServiciosCards from "../../componentes/componenteServicio/ServiciosCards"
import "./inicio.css"

export default function Inicio() {
  const testimonios = [
    {
      nombre: "Constructora Andina",
      cargo: "Gerente de Operaciones",
      texto: "Trabajar con Euskal Perú nos permitió mejorar nuestros procesos de izaje. La calidad de los equipos y el soporte técnico fueron clave.",
    },
    {
      nombre: "Minera Los Pinos",
      cargo: "Jefe de Logística",
      texto: "El servicio de fabricación a medida fue excelente. Obtuvimos un equipo certificado y adaptado completamente a nuestra operación.",
    },
    {
      nombre: "Pesquera Santa Mar",
      cargo: "Supervisor de Mantenimiento",
      texto: "La capacitación fue clara y práctica. Nuestro personal opera con mayor seguridad y confianza.",
    },
  ];

  return (
    <section className="pagina-inicio">
      {/* SECCIÓN ACERCA DE NOSOTROS CORREGIDA */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          alignItems: "center", 
          gap: "30px", // Reducido un poco para móviles
          justifyContent: "center" 
        }}>
          {/* Imagen con entrada desde la izquierda */}
          <div style={{ flex: "1 1 300px", maxWidth: "500px" }} data-aos="fade-right">
            <img
              src="/imageneSliderNosotros/InicioimagenNosotros.svg"
              alt="Acerca de Nosotros"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
          
          {/* Texto con entrada desde la derecha - SOLUCIÓN RESPONSIVA */}
          <div style={{ 
            flex: "1 1 300px", // Cambiado de 1 a flexible con base de 300px
            minWidth: "unset", // ELIMINADO el minWidth de 500px
            padding: "0 10px" 
          }} data-aos="fade-left">
            <h2 style={{ 
              color: "#0D5F7D", 
              fontSize: "clamp(28px, 5vw, 42px)", // Tamaño dinámico
              marginBottom: "20px" 
            }}>
              Acerca de Nosotros
            </h2>
            <p style={{ fontSize: "clamp(16px, 4vw, 18px)", lineHeight: "1.6", color: "#333" }}>
              Somos una empresa dedicada a la importación, comercialización y distribución de accesorios y
              equipos de uso industrial necesarios para la minería, pesca, construcción, petróleo, electricidad y metal mecánica.
            </p>
            <br />
            <button
              onClick={() => window.location.href = "/nosotros"}
              style={{
                padding: "12px 25px",
                backgroundColor: "#0D5F7D",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#D98400")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0D5F7D")}
            >
              Leer Más
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Ventajas */}
      <div style={{ backgroundColor: "#EAF2F8", borderRadius: "20px", boxShadow: "0 8px 25px rgba(0,0,0,0.1)", margin: "0 10px" }}>
        <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "40px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#0D5F7D", fontSize: "clamp(24px, 5vw, 36px)", marginBottom: "40px" }} data-aos="fade-up">
            ¿Por qué elegirnos?
          </h2>

          <div className="ventajas-container" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "20px" 
          }}>
            <div className="ventaja-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Seguridad</h3>
              <p>Nuestros equipos cumplen con los más altos estándares para proteger personas y materiales.</p>
            </div>
            <div className="ventaja-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Calidad</h3>
              <p>Equipos confiables y duraderos, diseñados para ofrecer eficiencia en cada proyecto.</p>
            </div>
            <div className="ventaja-card" data-aos="fade-up" data-aos-delay="300">
              <h3>Soporte</h3>
              <p>Asesoría experta y atención personalizada para cada cliente y proyecto.</p>
            </div>
            <div className="ventaja-card" data-aos="fade-up" data-aos-delay="400">
              <h3>Innovación</h3>
              <p>Siempre a la vanguardia, ofreciendo soluciones modernas y eficientes.</p>
            </div>
          </div>
        </div>
      </div>

      <header style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 className="titulo">Nuestros Productos</h2>
      </header>
      <ProductosCards modo="slider" />
      <ServiciosCards />

      {/* Sectores */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }} data-aos="zoom-in">
        <h2 style={{ color: "#0D5F7D", fontSize: "clamp(28px, 5vw, 40px)", marginBottom: "20px" }}>Sectores</h2>
        <SectoresSlider />
      </div>

      {/* TESTIMONIOS */}
      <div className="testimonios" style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
        <div className="container" style={{ width: "90%", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <span className="tag" style={{ display: "inline-block", padding: "6px 18px", background: "#ffb74aff", color: "#fff", borderRadius: "5px", fontSize: "15px", letterSpacing: "1px", marginBottom: "12px" }}>
            OPINIONES
          </span>
          <h2 className="titulo" style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "700", marginBottom: "40px", color: "#0D5F7D" }}>
            Lo que dicen nuestros clientes
          </h2>

          <div className="testimonios-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
            {testimonios.map((t, i) => (
              <article key={i} className="test-card" 
                data-aos="fade-up" 
                data-aos-delay={i * 150}
                style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", transition: "0.3s", cursor: "default", minHeight: "200px" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="test-header" style={{ marginBottom: "10px" }}>
                  <h4 className="test-nombre" style={{ fontSize: "17px", margin: "0", fontWeight: "600", color: "#222" }}>{t.nombre}</h4>
                  <span className="test-cargo" style={{ fontSize: "15px", color: "#666" }}>{t.cargo}</span>
                </div>
                <p className="test-text" style={{ fontSize: "17px", lineHeight: "1.4", color: "#444", marginTop: "5px" }}>“{t.texto}”</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}