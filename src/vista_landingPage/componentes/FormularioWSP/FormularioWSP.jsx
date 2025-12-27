import { useState } from "react";

export default function WhatsappForm() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sector, setSector] = useState("");
  const [requerimiento, setRequerimiento] = useState("");
  const [otrosRequerimiento, setOtrosRequerimiento] = useState("");
  const [descripcion, setDescripcion] = useState(""); // <-- agregado

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
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

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contáctanos por WhatsApp</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
       <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label>Nombres</label>
            <input
            type="text"
            placeholder="Ejem. Juan"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label>Apellidos</label>
            <input
            type="text"
            placeholder="Ejem. Pérez"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
        </div>
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label>Empresa</label>
            <input
            type="text"
            placeholder="Ejem. Acme S.A."
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label>Teléfono</label>
            <input
            type="tel"
            placeholder="Ejem. 987654321"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
        </div>
        </div>

        <label>Sector</label>
        <select value={sector} onChange={(e) => setSector(e.target.value)} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
          <option value="">Selecciona tu sector</option>
          <option value="Minería">Minería</option>
          <option value="Pesca">Pesca</option>
          <option value="Petrolera">Petrolera</option>
          <option value="Construcción">Construcción</option>
          <option value="Agricultura">Agricultura</option>
          <option value="Logística">Logística</option>
          <option value="Metalmecánica">Metalmecánica</option>
        </select>

        <label>Tipo de requerimiento</label>
        <select value={requerimiento} onChange={(e) => setRequerimiento(e.target.value)} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
          <option value="">Indique el tipo de requerimiento</option>
          <option value="Equipos de izaje">Equipos de izaje</option>
          <option value="Accesorios de izaje">Accesorios de izaje</option>
          <option value="Maniobras de carga">Maniobras de carga</option>
          <option value="Otros">Otros (escribe tu necesidad)</option>
        </select>

        {requerimiento === "Otros" && (
          <input type="text" placeholder="Escribe tu necesidad" value={otrosRequerimiento} onChange={(e) => setOtrosRequerimiento(e.target.value)} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        )}

        <label>Mensaje adicional (Opcional)</label>
        <textarea placeholder="Escribe aquí una pequeña descripción o mensaje..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={4} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <button type="submit" style={{ padding: "12px", backgroundColor: "#25D366", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", fontWeight: "bold", fontSize: "16px", transition: "background-color 0.3s" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#1ebe57"} onMouseLeave={(e) => e.target.style.backgroundColor = "#25D366"}>
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}