// Importa React y los componentes de Material UI necesarios para las tarjetas
import React, { useEffect, useState } from "react";
import {
  Card, CardContent, CardMedia, Typography, Button,
  CardActionArea, CardActions, MenuItem, Select, Box
} from "@mui/material";
// Importa el hook useNavigate para la navegación programática
import { useNavigate, useLocation } from "react-router-dom";

// Componente que representa una tarjeta individual de producto o servicio
function TarjetaServicio({ img, titulo, descripcion, precios, precio, imgs, productosSeleccionados = [], allProductos = [] }) {
  const navigate = useNavigate();
  const [precioSeleccionado, setPrecioSeleccionado] = useState(precios?.[0]?.precio ?? precio);
  const [nombreSeleccionado, setNombreSeleccionado] = useState(precios?.[0]?.Nombre ?? "");
  const [imgIndex, setImgIndex] = useState(0);
  const [yaAgregado, setYaAgregado] = useState(false);

  // Verifica si el producto ya fue agregado (considerando tamaño si aplica)
  useEffect(() => {
    if (productosSeleccionados.length === 0) {
      setYaAgregado(false);
      return;
    }
    const repetido = productosSeleccionados.some(
      (p) =>
        p.titulo === titulo &&
        (precios?.length > 0
          ? p.nombreSeleccionado === nombreSeleccionado
          : true)
    );
    setYaAgregado(repetido);
  }, [productosSeleccionados, titulo, nombreSeleccionado, precios]);

  // Función que navega a la página de contacto y pasa un mensaje personalizado
  const handleContactar = () => {
    const productoActual = {
      titulo,
      descripcion,
      precio,
      nombreSeleccionado,
      precioSeleccionado,
    };
    navigate("/contacto", {
      state: {
        productosSeleccionados: [...productosSeleccionados, productoActual],
        allProductos // <-- pasa todos los productos aquí
      },
    });
  };

  const handlePrevImg = (e) => {
    e.stopPropagation();
    if (!imgs?.length) return;
    setImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    if (!imgs?.length) return;
    setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 2 }}>
      <CardActionArea disableTouchRipple disableRipple>
        <Box sx={{ position: "relative" }}>
          {/* Muestra la imagen del producto */}
          <CardMedia
            component="img"
            height="140"
            image={imgs?.length > 0 ? imgs[imgIndex] : img}
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
              pointerEvents: "none" // Evita interacción sobre la imagen
            }}
          />
          {/* Controles de imagen anterior/siguiente si hay varias imágenes */}
          {imgs?.length > 1 && (
            <>
              <Button
                size="small"
                sx={{
                  position: "absolute", top: "50%", left: 0, minWidth: 0,
                  color: "#fff", background: "rgba(0,0,0,0.3)",
                  transform: "translateY(-50%)", zIndex: 2, borderRadius: "50%", px: 1,
                }}
                onClick={handlePrevImg}
                tabIndex={0}
              >{"<"}</Button>
              <Button
                size="small"
                sx={{
                  position: "absolute", top: "50%", right: 0, minWidth: 0,
                  color: "#fff", background: "rgba(0,0,0,0.3)",
                  transform: "translateY(-50%)", zIndex: 2, borderRadius: "50%", px: 1,
                }}
                onClick={handleNextImg}
                tabIndex={0}
              >{">"}</Button>
            </>
          )}
        </Box>
        <CardContent>
          {/* Muestra el título del producto */}
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          {/* Muestra la descripción del producto */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {descripcion}
          </Typography>
          {/* Selector de precios si hay varias opciones */}
          {precios?.length > 0 && (
            <Select
              fullWidth
              value={precioSeleccionado}
              onChange={(e) => {
                const idx = precios.findIndex(p => p.precio === e.target.value);
                setPrecioSeleccionado(e.target.value);
                setNombreSeleccionado(precios[idx].Nombre);
              }}
              sx={{ mt: 2 }}
            >
              {precios.map((p, idx) => (
                <MenuItem key={idx} value={p.precio}>
                  {p.Nombre} - ${p.precio}
                </MenuItem>
              ))}
            </Select>
          )}
          {/* Muestra el precio si solo hay uno */}
          {!precios && precio && (
            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Precio: ${precio}
            </Typography>
          )}
          {/* Etiqueta si el producto ya fue agregado */}
          {yaAgregado && (
            <Typography sx={{ color: "orange", mt: 2, fontWeight: "bold" }}>
              Producto ya agregado para consultar
              {precios?.length > 0 && nombreSeleccionado ? ` (${nombreSeleccionado})` : ""}
            </Typography>
          )}
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
        <Button
          size="small"
          color="primary"
          onClick={handleContactar}
          disabled={yaAgregado}
        >
          Consultar en contacto
        </Button>
      </CardActions>
    </Card>
  );
}

// Componente que renderiza todas las tarjetas automáticamente usando los datos de la API
export default function ListaTarjetas() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const productosSeleccionados = location.state?.productosSeleccionados || [];

  useEffect(() => {
    fetch(
      "https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/",
      {
        headers: {
          Authorization: "Bearer ipss.get",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.data.productos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Scroll a la sección de tarjetas de servicio si el estado lo indica
  useEffect(() => {
    if (location.state?.irAProductos && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "5rem", marginBottom: "5rem" }}
        data-productos-titulo
        id="productos-typo"
      >
        Productos
      </Typography>
      <div
        id="tarjetas-servicio"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* Muestra un mensaje de carga mientras se obtienen los datos */}
        {loading ? (
          <Typography>Cargando...</Typography>
        ) : (
          /* Mapea cada elemento del JSON a una tarjeta */
          productos.map((item) => (
            <TarjetaServicio
              key={item.id}
              img={item.imgs?.[0] || ""}
              imgs={item.imgs}
              titulo={item.nombre}
              descripcion={item.descripcion}
              precios={item.precios}
              precio={item.precio}
              productosSeleccionados={productosSeleccionados}
              allProductos={productos}
            />
          ))
        )}
      </div>
    </>
  );
}
