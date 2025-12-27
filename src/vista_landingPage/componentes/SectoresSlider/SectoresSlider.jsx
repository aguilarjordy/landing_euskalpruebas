import { useState, useEffect, useRef } from "react";
import "./SectoresSlider.css";

const sectores = [
  { nombre: "Minería", imagen: "/imageneSliderNosotros/Sector1.svg" },
  { nombre: "Pesca", imagen: "/imageneSliderNosotros/Sector2.svg" },
  { nombre: "Petróleo", imagen: "/imageneSliderNosotros/Sector3.svg" },
  { nombre: "Construcción", imagen: "/imageneSliderNosotros/Sector4.svg" },
  { nombre: "Agricultura", imagen: "/imageneSliderNosotros/Sector5.svg" },
  { nombre: "Logística", imagen: "/imageneSliderNosotros/Sector6.svg" },
  { nombre: "Metalmecánica", imagen: "/imageneSliderNosotros/Sector7.svg" },
];

export default function SectoresSlider() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const slideWidth = 320; // ancho del item + margen
  const totalItems = sectores.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offset >= totalItems) {
      // reset sin que se note
      setTimeout(() => setOffset(0), 300); // delay para evitar salto brusco
    }
  }, [offset, totalItems]);

  return (
    <div style={{ width: "100%", overflow: "hidden", padding: "40px 0" }} ref={containerRef}>
      <div
        style={{
          display: "flex",
          transition: offset === 0 ? "none" : "transform 0.8s ease-in-out",
          transform: `translateX(-${offset * slideWidth}px)`,
        }}
      >
        {[...sectores, ...sectores].map((sector, i) => (
          <div
            key={i}
            style={{
              width: "300px",
              height: "400px",
              flexShrink: 0,
              borderRadius: "15px",
              marginRight: "20px",
              backgroundImage: `url(${sector.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: "normal",
                textAlign: "center",
                textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
                padding: "0 10px",
              }}
            >
              {sector.nombre}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}