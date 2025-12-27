import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";

import LayoutGeneral from "../src/vista_landingPage/layouts/LayoutGeneral";
import Inicio from "../src/vista_landingPage/layouts/Paginas/Inicio";
import ProductosPagina from "./vista_landingPage/layouts/Paginas/ProductosPagina";
import Nosotros from "../src/vista_landingPage/layouts/Paginas/Nosotros";
import Contacto from "../src/vista_landingPage/layouts/Paginas/Contacto";

// --- ESTE COMPONENTE HACE LA MAGIA DEL RECARGADO ---
function ScrollToTopAndAnimate() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Sube al inicio (evita que la nueva página cargue a mitad de scroll)
    window.scrollTo(0, 0);

    // 2. Refresca y reinicia las animaciones
    AOS.init({
      duration: 1000,
      once: false, // Importante: false para que se repitan al volver a la pestaña
      mirror: true,
    });
    AOS.refresh();
  }, [pathname]); // Se dispara cada vez que cambias de pestaña

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Activamos el reinicio de animaciones aquí */}
      <ScrollToTopAndAnimate />

      <Routes>
        <Route
          path="/"
          element={
            <LayoutGeneral
              titulo="IZAMOS EL FUTURO DEL PERÚ CON EXPERIENCIA"
              subtitulo="CALIDAD Y EXCELENCIA AL SERVICIO DE NUESTROS CLIENTES"
              imagen="/FondoInicio.svg"
              variante="inicio"
            >
              <Inicio />
            </LayoutGeneral>
          }
        />

        <Route
          path="/Productos_servicios"
          element={
            <LayoutGeneral
              titulo="Productos y Servicios"
              imagen="/FondoServicios.svg"
              variante="interno"
            >
              <ProductosPagina />
            </LayoutGeneral>
          }
        />

        <Route
          path="/Nosotros"
          element={
            <LayoutGeneral
              titulo="Nosotros"
              imagen="/FondoNosotros.svg"
              variante="interno"
            >
              <Nosotros />
            </LayoutGeneral>
          }
        />

        <Route
          path="/Contacto"
          element={
            <LayoutGeneral
              titulo="Contacto"
              imagen="/FondoContacto.svg"
              variante="interno"
            >
              <Contacto />
            </LayoutGeneral>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;