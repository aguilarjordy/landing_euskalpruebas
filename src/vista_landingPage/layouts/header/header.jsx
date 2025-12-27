import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setAbierto(!abierto);

  // Cerrar el menú si se hace click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !e.target.classList.contains("menu-toggle")) {
        setAbierto(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="header-logo-link">
          <img src="/LogoEUSKAL.svg" alt="Logo" className="header-logo" />
        </NavLink>

        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <nav ref={navRef} className={`header-nav ${abierto ? "abierto" : ""}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "activo" : ""}>Inicio</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : ""}>Nosotros</NavLink>
          <NavLink to="/Productos_Servicios" className={({isActive}) => isActive ? "activo" : ""}>Productos y Servicios</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : ""}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}