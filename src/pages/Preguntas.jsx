import Header from "../components/Header";
import Footer from "../components/Footer";
import Preguntas_F from "../components/Preguntas_F"

function Preguntas() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Preguntas_F />
            </main>
            <Footer />
        </div>
    );
}

export default Preguntas;