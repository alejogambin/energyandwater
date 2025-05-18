import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        height: '83vh', // Ajusta la altura según sea necesario
        position: 'relative',
        backgroundImage: 'url(src/img/home.png)', // Reemplaza con la ruta correcta de tu imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Capa de transparencia */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta la opacidad según sea necesario
          zIndex: 1,
        }}
      />
      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          padding: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Bienvenido a nuestra tienda de antigüedades
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Tienda de antigüedades Sthandier, donde la historia cobra vida a través de objetos únicos y fascinantes.
          Descubre la belleza de lo antiguo y encuentra tesoros que cuentan historias.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Conoce más
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
