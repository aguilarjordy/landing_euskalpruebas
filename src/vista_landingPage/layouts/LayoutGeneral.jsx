import Header from "../layouts/header/header";
import Footer from "../layouts/footer/footer";
import EncabezadoHero from "../componentes/EncabezadoHero/encabezadoHero";

export default function LayoutGeneral({
  children,
  titulo,
  subtitulo,
  imagen,
  variante = "interno" // 👈 IMPORTANTE
}) {
  return (
    <div className="layout-container">
      <Header />

      <EncabezadoHero
        titulo={titulo}
        subtitulo={subtitulo}
        imagen={imagen}
        variante={variante} // 🔥 AQUÍ SE SOLUCIONA TODO
      />

      <main className="contenido">
        {children}
      </main>

      <Footer />
    </div>
  );
}