import { useState } from "react";

export default function WhatsappForm() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sector, setSector] = useState("");
  const [requerimiento, setRequerimiento] = useState("");
  const [otrosRequerimiento, setOtrosRequerimiento] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombres.trim()) return alert("Por favor ingresa tus nombres");
    if (!apellidos.trim()) return alert("Por favor ingresa tus apellidos");
    if (!empresa.trim()) return alert("Por favor ingresa tu empresa");
    if (!telefono.match(/^\d{9}$/)) return alert("Ingresa un teléfono válido (9 dígitos)");
    if (!sector) return alert("Selecciona tu sector");
    if (!requerimiento) return alert("Selecciona el tipo de requerimiento");
    if (requerimiento === "Otros" && !otrosRequerimiento.trim()) return alert("Por favor escribe tu necesidad");

    const tipo = requerimiento === "Otros" ? otrosRequerimiento : requerimiento;
    const whatsappNumber = "933186721";
    const mensaje = `Hola, mi nombre es ${nombres} ${apellidos}, de la empresa ${empresa}. Estoy interesado en soluciones para el sector de ${sector}, y mi teléfono es ${telefono}. Tipo de requerimiento: ${tipo}. Mensaje adicional: ${descripcion}. `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Estilo común para inputs
  const inputStyle = {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px", // Evita el zoom automático en iOS
    width: "100%",
    boxSizing: "border-box"
  };

  // Estilo para grupos de dos columnas que colapsan
  const rowStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap" // Clave para la responsividad
  };

  const columnStyle = {
    flex: "1 1 200px", // Si el espacio es menor a 200px, baja a la siguiente línea
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  };

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "20px auto", 
      padding: "20px", 
      border: "1px solid #ddd", 
      borderRadius: "10px",
      backgroundColor: "#fff"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Contáctanos por WhatsApp
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Fila 1: Nombres y Apellidos */}
        <div style={rowStyle}>
          <div style={columnStyle}>
            <label style={{ fontWeight: "600" }}>Nombres</label>
            <input
              type="text"
              placeholder="Ejem. Juan"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={columnStyle}>
            <label style={{ fontWeight: "600" }}>Apellidos</label>
            <input
              type="text"
              placeholder="Ejem. Pérez"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Fila 2: Empresa y Teléfono */}
        <div style={rowStyle}>
          <div style={columnStyle}>
            <label style={{ fontWeight: "600" }}>Empresa</label>
            <input
              type="text"
              placeholder="Ejem. Acme S.A."
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={columnStyle}>
            <label style={{ fontWeight: "600" }}>Teléfono</label>
            <input
              type="tel"
              placeholder="Ejem. 987654321"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Sector */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontWeight: "600" }}>Sector</label>
          <select value={sector} onChange={(e) => setSector(e.target.value)} required style={inputStyle}>
            <option value="">Selecciona tu sector</option>
            <option value="Minería">Minería</option>
            <option value="Pesca">Pesca</option>
            <option value="Petrolera">Petrolera</option>
            <option value="Construcción">Construcción</option>
            <option value="Agricultura">Agricultura</option>
            <option value="Logística">Logística</option>
            <option value="Metalmecánica">Metalmecánica</option>
          </select>
        </div>

        {/* Tipo de Requerimiento */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontWeight: "600" }}>Tipo de requerimiento</label>
          <select value={requerimiento} onChange={(e) => setRequerimiento(e.target.value)} required style={inputStyle}>
            <option value="">Indique el tipo de requerimiento</option>
            <option value="Equipos de izaje">Equipos de izaje</option>
            <option value="Accesorios de izaje">Accesorios de izaje</option>
            <option value="Maniobras de carga">Maniobras de carga</option>
            <option value="Otros">Otros (escribe tu necesidad)</option>
          </select>
        </div>

        {requerimiento === "Otros" && (
          <input 
            type="text" 
            placeholder="Escribe tu necesidad" 
            value={otrosRequerimiento} 
            onChange={(e) => setOtrosRequerimiento(e.target.value)} 
            style={inputStyle} 
          />
        )}

        {/* Mensaje */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ fontWeight: "600" }}>Mensaje adicional (Opcional)</label>
          <textarea 
            placeholder="Escribe aquí una pequeña descripción..." 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            rows={4} 
            style={{ ...inputStyle, resize: "vertical" }} 
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: "15px", 
            backgroundColor: "#25D366", 
            color: "white", 
            border: "none", 
            cursor: "pointer", 
            borderRadius: "5px", 
            fontWeight: "bold", 
            fontSize: "18px", 
            transition: "background-color 0.3s",
            marginTop: "10px"
          }} 
          onMouseEnter={(e) => e.target.style.backgroundColor = "#1ebe57"} 
          onMouseLeave={(e) => e.target.style.backgroundColor = "#25D366"}
        >
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}