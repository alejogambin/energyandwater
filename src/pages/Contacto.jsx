// Importa el componente Header para mostrar el encabezado de la página
import Header from "../components/Header";
// Importa el componente Footer para mostrar el pie de página
import Footer from "../components/Footer";
// Importa el componente Formulario para mostrar el formulario de contacto
import Formulario from "../components/Formulario";

// Componente funcional que representa la página de contacto
function Contacto() {
    return (
        // Contenedor principal con altura mínima de pantalla completa y disposición en columna
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Muestra el encabezado */}
            <Header />
            {/* Contenido principal que ocupa el espacio restante */}
            <main style={{ flex: 1 }}>
                {/* Muestra el formulario de contacto */}
                <Formulario />
            </main>
            {/* Muestra el pie de página */}
            <Footer />
        </div>
    );
}

// Exporta el componente para su uso en el enrutador u otros lugares
export default Contacto;