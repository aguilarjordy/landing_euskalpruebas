import SectoresSlider from "../../componentes/SectoresSlider/SectoresSlider";

export default function Nosotros() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px", display: "flex", flexDirection: "column", gap: "60px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
        {/* Texto entra desde la izquierda */}
        <div style={{ flex: 1, minWidth: "500px" }} data-aos="fade-right">
          <br />
          <h2 style={{ color: "#0D5F7D", fontSize: "42px", marginBottom: "45px" }}>Acerca de Nosotros</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
            En <strong>Euskal Perú</strong>, nos apasiona transformar la forma en que las empresas 
            manejan el izaje y la manipulación de cargas pesadas.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
            Contamos con una sólida trayectoria en el mercado, posicionándonos como referentes 
            gracias a la calidad de nuestros productos.
          </p><br />
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
            Nos respaldan nuestra experiencia y conocimiento como expertos en asesoría, comercialización
            y mantenimiento de accesorios para izaje de carga, enfocados en ofrecer productos 
            confiables y soporte técnico especializado.
          </p>
        </div>

        {/* Imagen entra desde la derecha */}
        <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }} data-aos="fade-left">
          <img src="/imageneSliderNosotros/AcercaNosotros.svg" alt="Acerca de Nosotros" style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
        </div>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px", padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {[
            { title: "Misión", text: "Importamos y distribuimos equipos industriales, ofreciendo mantenimiento especializado y asesoría técnica en accesorios de izaje." },
            { title: "Visión", text: "Ser referente industrial reconocido por la calidad, confiabilidad y especialización en soluciones de izaje de carga." },
            { title: "Seguridad", text: "Cada producto cumple con los más altos estándares de seguridad." },
            { title: "Calidad", text: "Garantizamos que cada equipo sea confiable, duradero y eficiente." }
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
              style={{ padding: "30px", background: "linear-gradient(145deg, #ffffff, #f0f8ff)", borderRadius: "20px", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)"; }}
            >
              <h3 style={{ color: "#0D5F7D", marginBottom: "15px", fontWeight: "700", fontSize: "20px" }}>{item.title}</h3>
              <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center" }} data-aos="fade-up">
        <h2 style={{ color: "#0D5F7D", marginBottom: "20px" }}>Sectores</h2>
        <SectoresSlider />
      </div>
    </div>
  );
}