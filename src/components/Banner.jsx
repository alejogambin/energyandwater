import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// Componente funcional que representa el banner principal de la página de inicio
const Banner = () => {
  return (
    // Contenedor principal del banner con imagen de fondo y estilos de presentación
    <Box
      sx={{
        height: '83.6vh', // Ajusta la altura del banner
        position: 'relative',
        backgroundImage: 'url(src/img/home.png)', // Imagen de fondo del banner
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Capa de transparencia oscura sobre la imagen para mejorar la legibilidad del texto */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Opacidad de la capa
          zIndex: 1,
        }}
      />
      {/* Contenido del banner: título, descripción y botón */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // Asegura que el contenido esté sobre la capa de transparencia
          padding: 2,
        }}
      >
        {/* Título principal del banner */}
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Bienvenido a nuestra tienda de antigüedades
        </Typography>
        {/* Descripción breve de la tienda */}
        <Typography variant="h6" sx={{ mb: 4 }}>
          Tienda de antigüedades Sthandier, donde la historia cobra vida a través de objetos únicos y fascinantes.
          Descubre la belleza de lo antiguo y encuentra tesoros que cuentan historias.
        </Typography>
        {/* Botón que dirige a la sección "Quiénes somos" */}
        <Button variant="contained" color="primary" size="large" sx={{ mt: 8 }} href="/nosotros">  
          Conoce más
        </Button>
      </Box>
    </Box>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default Banner;
