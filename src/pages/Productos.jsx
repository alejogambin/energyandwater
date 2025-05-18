import Header from "../components/Header";
import Footer from "../components/Footer";
import Tarjeta_Servicio from "../components/Tarjeta_Servicio";
import Carrousel from "../components/Carrousel";

function Productos() {
    return (
        <>
            <Header />
            <Carrousel />
            <Tarjeta_Servicio />
            <Footer />
        </>
    );
}

export default Productos;