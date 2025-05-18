// Importa React y los componentes de Material UI necesarios para las tarjetas
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
// Importa los datos de productos desde un archivo JSON
import data from "../Json/data.json"; 
// Importa el hook useNavigate para la navegación programática
import { useNavigate } from "react-router-dom";

// Componente que representa una tarjeta individual de producto o servicio
function TarjetaServicio({ img, titulo, descripcion }) {
  const navigate = useNavigate();

  // Función que navega a la página de contacto y pasa un mensaje personalizado
  const handleContactar = () => {
    navigate("/contacto", {
      state: {
        mensaje: `Estoy interesado en: ${titulo} - ${descripcion}. Necesito más información.`,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 2 }}>
      <CardActionArea>
        {/* Muestra la imagen del producto */}
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={titulo}
          sx={{
            objectFit: "cover",
            backgroundColor: "#fff",
            margin: 0,
            display: "block",
            width: "100%",
            height: "140px",
            maxHeight: "140px",
            maxWidth: "100%",
          }}
        />
        <CardContent>
          {/* Muestra el título del producto */}
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          {/* Muestra la descripción del producto */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Botón para contactar, llama a handleContactar al hacer clic */}
        <Button size="small" color="primary" onClick={handleContactar}>
          Contactanos
        </Button>
      </CardActions>
    </Card>
  );
}

// Componente que renderiza todas las tarjetas automáticamente usando los datos del JSON
export default function ListaTarjetas() {
  return (
    <>
      {/* Título principal de la sección de productos */}
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}
      >
        Nuestros Productos
      </Typography>
      {/* Contenedor de las tarjetas, usa flexbox para distribuirlas */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* Mapea cada elemento del JSON a una tarjeta */}
        {data.map((item) => (
          <TarjetaServicio
            key={item.id}
            img={item.img}
            titulo={item.titulo}
            descripcion={item.descripcion}
          />
        ))}
      </div>
    </>
  );
}
