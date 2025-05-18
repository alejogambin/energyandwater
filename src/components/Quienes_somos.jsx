import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import imagenNosotros from "../img/quienes_somos.jpg";

const QuienesSomos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 3, fontWeight: "bold", marginTop: "2rem" }}
      >
        ¿Quiénes Somos?
      </Typography>
      <img
        src={imagenNosotros}
        alt="Nuestro equipo"
        style={{
          width: "600px",
          height: "400px",
          borderRadius: "12px",
          marginBottom: "2rem",
          marginTop: "1rem",
          objectFit: "cover",
        }}
      />
      <Typography variant="body1" sx={{ textAlign: "center", maxWidth: 600 }}>
        Antigüedades Sthandier, ubicada en el encantador balneario de Zapallar, Chile, es un rincón mágico donde el pasado cobra vida a través de exquisitas piezas de colección. Especializada en muñecas antiguas de porcelana y juegos de loza de fina manufactura, esta tienda es un verdadero refugio para los amantes de la historia, la elegancia y el arte en miniatura. Cada muñeca, con su delicada expresión y vestimenta detallada, cuenta su propia historia y refleja la artesanía de épocas pasadas. Los juegos de loza, con sus diseños refinados y su impecable conservación, evocan reuniones familiares, rituales de té y tradiciones que perduran en el tiempo. Antigüedades Sthandier no solo ofrece objetos únicos, sino también una experiencia inmersiva donde los visitantes pueden viajar a un mundo donde cada pieza tiene alma. Un destino imperdible para coleccionistas, nostálgicos y amantes de la belleza clásica. ¡Ven y descubre tesoros con historia!
      </Typography>
    </Box>
  );
};

export default QuienesSomos;
