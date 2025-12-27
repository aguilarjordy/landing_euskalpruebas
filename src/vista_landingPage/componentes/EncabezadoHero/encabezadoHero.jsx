import "./EncabezadoHero.css";

export default function EncabezadoHero({
  titulo = "",
  subtitulo = "",
  imagen = "",
  variante = "interno" // 👈 nuevo
}) {
  return (
    <section
      className={`contenedor-hero hero-${variante}`}
      style={{ backgroundImage: `url(${imagen})` }}
      data-aos="fade"
      data-aos-duration="1500"
    >
      <div className="contenido-hero">
        <h1 data-aos="fade-up">{titulo}</h1>
        {subtitulo && <p data-aos="fade-up">{subtitulo}</p>}
      </div>
    </section>
  );
}