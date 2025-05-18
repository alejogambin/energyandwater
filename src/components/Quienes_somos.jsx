import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import imagenNosotros from "../img/quienes_somos.jpg";

const QuienesSomos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // columna en móvil, fila en desktop
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        gap: 4,
      }}
    >
      <Box
        component="img"
        src={imagenNosotros}
        alt="Nuestro equipo"
        sx={{
          width: { xs: "100%", md: 600 },
          height: { xs: 300, md: 400 },
          borderRadius: "12px",
          objectFit: "cover",
          marginBottom: { xs: 2, md: 0 },
        }}
      />
      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", md: "left" },
            mb: 3,
            fontWeight: "bold",
            marginTop: { xs: "2rem", md: 0 },
          }}
        >
          ¿Quiénes Somos?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Antigüedades Sthandier, ubicada en el encantador balneario de Zapallar, Chile, es un rincón mágico donde el pasado cobra vida a través de exquisitas piezas de colección. Especializada en muñecas antiguas de porcelana y juegos de loza de fina manufactura, esta tienda es un verdadero refugio para los amantes de la historia, la elegancia y el arte en miniatura. Cada muñeca, con su delicada expresión y vestimenta detallada, cuenta su propia historia y refleja la artesanía de épocas pasadas. Los juegos de loza, con sus diseños refinados y su impecable conservación, evocan reuniones familiares, rituales de té y tradiciones que perduran en el tiempo. Antigüedades Sthandier no solo ofrece objetos únicos, sino también una experiencia inmersiva donde los visitantes pueden viajar a un mundo donde cada pieza tiene alma. Un destino imperdible para coleccionistas, nostálgicos y amantes de la belleza clásica. ¡Ven y descubre tesoros con historia!
        </Typography>
      </Box>
    </Box>
  );
};

export default QuienesSomos;