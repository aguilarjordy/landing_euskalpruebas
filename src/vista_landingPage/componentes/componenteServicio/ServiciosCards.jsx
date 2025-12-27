import React, { useEffect, useRef, useState } from "react";

export default function ServiciosCards() {
  const servicios = [
    {
      titulo: "Asesoría Técnica y Comercial",
      descripcion: `Ofrecemos orientación experta y personalizada en accesorios y equipos industriales. 
Te guiamos para un uso seguro, eficiente y adaptado a las necesidades específicas de tu proyecto, 
asegurando que cada operación se realice con precisión y confianza.`,
    },
    {
      titulo: "Mantenimiento de Accesorios de Izaje",
      descripcion: `Nos encargamos de la revisión, ajuste y conservación de cables, grilletes, estrobos y slingas. 
Garantizamos máxima durabilidad, seguridad y desempeño, para que tus equipos funcionen siempre de manera óptima y confiable.`,
    },
  ];

  // Hook para detectar si el elemento está en pantalla
  const useOnScreen = (ref, threshold = 0.2) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, threshold]);

    return isVisible;
  };

  const Card = ({ children }) => {
    const ref = useRef();
    const visible = useOnScreen(ref);
    const [hovered, setHovered] = useState(false);

    return (
      <div
        ref={ref}
        style={{
          flex: "1 1 200px",
          minWidth: "180px",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          backgroundColor: "#fff",
          transition: "opacity 0.6s ease-out, transform 0.3s ease-out",
          transform: visible ? "translateY(0)" : "translateY(30px)",
          opacity: visible ? 1 : 0,
          cursor: "default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
          setHovered(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = visible
            ? "translateY(0)"
            : "translateY(30px)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
          setHovered(false);
        }}
      >
        {React.Children.map(children, (child) => {
          // Cambiar color del título si es h3
          if (child.type === "h3") {
            return React.cloneElement(child, {
              style: {
                ...child.props.style,
                color: hovered ? "#d98400" : "#0D5F7D",
                transition: "color 0.3s",
              },
            });
          }
          return child;
        })}
      </div>
    );
  };

  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <h2
        style={{
          color: "#0D5F7D",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        Nuestros Servicios
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {servicios.map((servicio, index) => (
          <Card key={index}>
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              {servicio.titulo}
            </h3>
            <p
              style={{
                color: "#555",
                lineHeight: "1.5",
                fontSize: "0.9rem",
              }}
            >
              {servicio.descripcion}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}