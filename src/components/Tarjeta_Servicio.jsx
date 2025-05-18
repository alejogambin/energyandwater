import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import data from "../Json/data.json"; // Ajusta la ruta si es necesario

function TarjetaServicio({ img, titulo, descripcion }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 2 }}>
      <CardActionArea>
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
            maxWidth: "100%" 
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
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
        <Button size="small" color="primary">
          Contactanos
        </Button>
      </CardActions>
    </Card>
  );
}

// Componente que renderiza todas las tarjetas automáticamente
export default function ListaTarjetas() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((item) => (
        <TarjetaServicio
          key={item.id}
          img={item.img}
          titulo={item.titulo}
          descripcion={item.descripcion}
        />
      ))}
    </div>
  );
}
