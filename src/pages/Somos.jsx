// Importa el componente Header para mostrar el encabezado de la página
import Header from "../components/Header";
// Importa el componente Footer para mostrar el pie de página
import Footer from "../components/Footer";
// Importa el componente Quienes_somos que contiene la información principal de la sección
import Quienes_somos from "../components/Quienes_somos"

// Componente funcional que representa la página "Somos"
function Somos() {
    return (
        <>
            {/* Muestra el encabezado */}
            <Header />
            {/* Muestra la sección principal "Quiénes somos" */}
            <Quienes_somos />
            {/* Muestra el pie de página */}
            <Footer />
        </>
    );
}

// Exporta el componente para su uso en el enrutador u otros lugares
export default Somos;
