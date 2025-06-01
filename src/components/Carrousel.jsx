import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Typography, IconButton } from "@mui/material";

const images = [
  { imgPath: "src/img/nuevo1.jpg" },
  { imgPath: "src/img/nuevo2.jpg" },
  { imgPath: "src/img/nuevo3.jpg" },
  { imgPath: "src/img/nuevo4.jpg" },
  { imgPath: "src/img/nuevo5.jpg" },
];

export default function Carrousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () =>
    setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
  const handleBack = () =>
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));

  return (
    <>
      <Box>
        <Typography variant="h3" sx={{ textAlign: "center", mt: 4 }}>
          Productos Nuevos
        </Typography>
      </Box>
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
        />
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
          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              "&:hover": { background: "rgba(0,0,0,0.5)" },
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
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
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              "&:hover": { background: "rgba(0,0,0,0.5)" },
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1,
              zIndex: 3,
            }}
          >
            {images.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    idx === activeStep
                      ? "#fff"
                      : "rgba(255,255,255,0.5)",
                  border:
                    idx === activeStep ? "2px solid #333" : "2px solid #fff",
                  transition: "background 0.3s, border 0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setActiveStep(idx)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
