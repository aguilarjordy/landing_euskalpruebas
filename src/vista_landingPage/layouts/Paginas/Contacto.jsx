import WhatsappForm from "../../componentes/FormularioWSP/FormularioWSP";
import MapaContactenos from "../../componentes/MapaContactenos/MapaContactenos";

export default function Contacto({ }) {
  return (
    <>
      <section
        className="pagina-contacto"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          padding: "40px 20px",
          flexWrap: "wrap"
        }}
      >
        {/* Imagen: Entra desde la IZQUIERDA */}
        <div 
          style={{ flex: "1 1 300px", maxWidth: "500px", marginTop:"10px" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/ImagenformularioContacto.svg"
            alt="Contacto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </div>

        {/* Formulario: Entra desde la DERECHA con un pequeño retraso */}
        <div 
          style={{ flex: "1 1 300px", maxWidth: "500px" }}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <WhatsappForm />
        </div>
      </section>

      {/* Mapa: Aparece con un efecto de Zoom desde abajo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
          marginTop: "30px"
        }}
        data-aos="zoom-in-up"
        data-aos-offset="100"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "80%",
            height: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          <MapaContactenos />
        </div>
      </div>
      
      <br /><br /><br /><br />
    </>
  );
}