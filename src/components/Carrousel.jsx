import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

// Arreglo de imágenes que se mostrarán en el carrusel
const images = [
  { imgPath: "src/img/nuevo1.jpg" },
  { imgPath: "src/img/nuevo2.jpg" },
  { imgPath: "src/img/nuevo3.jpg" },
  { imgPath: "src/img/nuevo4.jpg" },
  { imgPath: "src/img/nuevo5.jpg" },
];

// Componente funcional que representa el carrusel de imágenes
export default function Carrousel() {
  const theme = useTheme(); // Obtiene el tema actual de Material UI
  const [activeStep, setActiveStep] = React.useState(0); // Estado para la imagen activa
  const maxSteps = images.length; // Número total de imágenes

  // Función para avanzar a la siguiente imagen
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Función para retroceder a la imagen anterior
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {/* Título del carrusel */}
      <Box>
        <Typography variant="h3" sx={{ textAlign: "center", mt: 4 }}>
          Recien Agregados
        </Typography>
      </Box>
      {/* Contenedor principal del carrusel */}
      <Box
        sx={{
          width: "90%",
          height: "80vh",
          maxWidth: 1200,
          flexGrow: 1,
          margin: "0 auto",
          mt: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Espacio para un posible título o descripción adicional */}
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          {/* Puedes agregar aquí un título si lo deseas */}
        </Paper>
        {/* Imagen principal del carrusel */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={images[activeStep].imgPath}
            alt={`slide-${activeStep}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "opacity 0.5s",
            }}
          />
        </Box>
        {/* Controles de navegación del carrusel */}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Siguiente
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Atrás
            </Button>
          }
        />
      </Box>
    </>
  );
}
