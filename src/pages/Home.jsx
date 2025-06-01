// Importa el componente Header para mostrar el encabezado de la página
import Header from "../components/Header";
// Importa el componente Footer para mostrar el pie de página
import Footer from "../components/Footer";
// Importa el componente Banner para mostrar el contenido principal de la página de inicio
import Banner from "../components/Banner";
// Importa el componente QuienesSmos para mostrar información sobre la empresa
import QuienesSomos from "../components/Quienes_somos";
import Productos from "../pages/Productos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente funcional que representa la página de inicio
function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.irAProductos && location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [location]);

    return (
        // Contenedor principal con margen superior para compensar el AppBar fijo
        <div>
            {/* Muestra el encabezado */}
            <Header />
            {/* Contenido principal que ocupa el espacio restante */}
            <main style={{ flex: 1 }}>
                <div >
                    {/* Muestra el banner principal */}
                    <Banner />
                </div>
                {/* Muestra información sobre la empresa */}
                <QuienesSomos />
                {/* Sección de productos con ref */}
                <div id="productos-inicio">
                    <Productos />
                </div>
            </main>
            {/* Muestra el pie de página */}
            <Footer />
        </div>
    );
}

// Exporta el componente para su uso en el enrutador u otros lugares
export default Home;