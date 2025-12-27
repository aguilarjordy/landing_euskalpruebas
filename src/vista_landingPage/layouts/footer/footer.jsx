import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "auto" });

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Logo + descripción columna 1*/}
        <div className="footer-col">
          <Link to="/" className="footer-logo-link" onClick={scrollTop}>
            <img src="/LogoEUSKAL.svg" alt="Logo" className="footer-logo" />
          </Link>
          <p>
            Soluciones de izaje y maniobra de carga con calidad,
            seguridad y experiencia.
          </p>
        </div>

        {/* Menú  columna 2*/}
        <div className="footer-col footer-menu">
          <h4>Menú</h4>
          <ul>
            <li><Link to="/" onClick={scrollTop}>Inicio</Link></li>
            <li><Link to="/nosotros" onClick={scrollTop}>Nosotros</Link></li>
            <li><Link to="/Productos" onClick={scrollTop}>Productos</Link></li>
            <li><Link to="/contacto" onClick={scrollTop}>Contacto</Link></li>
          </ul>
        </div>

        {/* Horario columna 3*/}
        <div className="footer-col">
          <h4>Horario</h4>
          <p>Lunes a Viernes: 8:00 am – 6:00 pm</p>
          <p>Sábados: 8:00 am – 1:00 pm</p>

          <h4>¿Tienes dudas?</h4>
          <p>Contáctanos por WhatsApp.</p>
          <p>📞 +51 993 105 161</p>
        </div>

        {/* Dirección + Social columna 4*/}
        <div className="footer-col">
          <h4>Visítanos</h4>
          <p>Cal. Norberto Haro Andaluzan Nro. 2535 Dpto. 502</p>

          <h4>Correo</h4>
          <p>ventas2@euskalperu.com</p>

          <h4 className="footer-social-title">Síguenos</h4>
          <div className="footer-icons">

            {/* WhatsApp */}
            <a
              href="https://wa.me/51993105161"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.148-.671.149-.198.296-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.671-1.612-.92-2.198-.242-.574-.487-.497-.671-.497-.173 0-.371-.025-.571-.025-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.487.709.306 1.262.489 1.693.626.711.227 1.358.196 1.871.119.571-.085 1.758-.718 2.007-1.414.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.569-.347z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}