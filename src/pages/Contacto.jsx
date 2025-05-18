import Header from "../components/Header";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import { useState } from "react";

function Contacto() {
     const [mensaje] = useState("");
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Formulario mensajeInicial={mensaje} />
            </main>
            <Footer />
        </div>
    );
}

export default Contacto;