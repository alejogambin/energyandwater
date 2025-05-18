// Importa el componente Header para mostrar el encabezado de la página
import Header from "../components/Header";
// Importa el componente Footer para mostrar el pie de página
import Footer from "../components/Footer";
// Importa el componente Tarjeta_Servicio para mostrar los servicios o productos
import Tarjeta_Servicio from "../components/Tarjeta_Servicio";
// Importa el componente Carrousel para mostrar un carrusel de imágenes o productos
import Carrousel from "../components/Carrousel";

// Componente funcional que representa la página de productos o servicios
function Productos() {
    return (
        <>
            {/* Muestra el encabezado */}
            <Header />
            {/* Muestra el carrusel de productos o imágenes */}
            <Carrousel />
            {/* Muestra las tarjetas de servicios o productos */}
            <Tarjeta_Servicio />
            {/* Muestra el pie de página */}
            <Footer />
        </>
    );
}

// Exporta el componente para su uso en el enrutador u otros lugares
export default Productos;