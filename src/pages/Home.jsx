import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Home() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Banner />
            </main>
            <Footer />
        </div>
    );
}

export default Home;