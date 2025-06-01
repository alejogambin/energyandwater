// Importa el componente Box de Material UI para crear contenedores flexibles
import Box from "@mui/material/Box";
// Importa el componente Typography de Material UI para los textos
import Typography from "@mui/material/Typography";
// Importa la imagen que se mostrará en la sección "Quiénes somos"
import imagenNosotros from "../img/quienes_somos.jpg";
// Importa los hooks useEffect y useState de React para manejar el estado y los efectos secundarios
import { useEffect, useState } from "react";

// Componente funcional que muestra la sección "Quiénes Somos"
const QuienesSomos = () => {
  const [descripcion, setDescripcion] = useState("");

  // Efecto que se ejecuta al montar el componente para obtener la descripción desde una API
  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/", {
      headers: { Authorization: "Bearer ipss.get" }
    })
      .then(res => res.json())
      .then(data => setDescripcion(data.data || ""))
      .catch(() => setDescripcion(""));
  }, []);

  return (
    // Contenedor principal con diseño flexible y responsivo
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // columna en móvil, fila en desktop
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
        gap: 4,
      }}
    >
      {/* Muestra la imagen del equipo o tienda */}
      <Box
        component="img"
        src={imagenNosotros}
        alt="Nuestro equipo"
        sx={{
          width: { xs: "100%", md: 600 },
          height: { xs: 300, md: 400 },
          borderRadius: "12px",
          objectFit: "cover",
          mb: { xs: 2, md: 0 },
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      />
      {/* Contenedor del texto descriptivo */}
      <Box sx={{ maxWidth: 600 }}>
        {/* Título de la sección */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold",
            mt: { xs: "2rem", md: 0 },
          }}
        >
          ¿Quiénes Somos?
        </Typography>
        {/* Descripción obtenida de la API */}
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {descripcion || "Cargando descripción..."}
        </Typography>
      </Box>
    </Box>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default QuienesSomos;