import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

// Componente funcional que representa el formulario de contacto
const Formulario = ({ mensaje }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [productosSeleccionados, setProductosSeleccionados] = useState(
    location.state?.productosSeleccionados || []
  );

  // Estado para los valores del formulario
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: mensaje,
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({});
  // Estado para indicar si el formulario fue enviado correctamente
  const [enviado, setEnviado] = useState(false);
  // Determina si ya están todos los productos y variantes agregados
  const [todosAgregados, setTodosAgregados] = useState(false);

  useEffect(() => {
    // Obtener todos los productos y variantes posibles desde el estado de navegación (si existe)
    const allProductos = location.state?.allProductos || [];
    if (!allProductos.length) {
      setTodosAgregados(false);
      return;
    }
    // Genera un set de identificadores únicos para cada producto+variante
    const allKeys = new Set();
    allProductos.forEach((prod) => {
      if (prod.precios?.length > 0) {
        prod.precios.forEach((precio) => {
          allKeys.add(`${prod.nombre}__${precio.Nombre}`);
        });
      } else {
        allKeys.add(`${prod.nombre}`);
      }
    });
    // Genera un set de los productos seleccionados
    const selectedKeys = new Set();
    productosSeleccionados.forEach((prod) => {
      if (prod.nombreSeleccionado) {
        selectedKeys.add(`${prod.titulo}__${prod.nombreSeleccionado}`);
      } else {
        selectedKeys.add(`${prod.titulo}`);
      }
    });
    setTodosAgregados(allKeys.size > 0 && allKeys.size === selectedKeys.size);
  }, [productosSeleccionados, location.state]);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setEnviado(false);
  };

  // Valida los campos del formulario antes de enviar
  const validate = () => {
    const temp = {};
    if (!form.nombre.trim()) temp.nombre = "El nombre es obligatorio";
    else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(form.nombre))
      temp.nombre = "El nombre solo debe contener letras y espacios";
    if (!form.email.trim()) temp.email = "El email es obligatorio";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      temp.email = "El email no es válido debe contener @ y un dominio";
    if (!form.mensaje.trim()) temp.mensaje = "El mensaje es obligatorio";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setEnviado(true);
      setForm({ nombre: "", email: "", mensaje: "" });
      setErrors({});
    }
  };

  // Maneja el click en "Agregar otro producto"
  const handleAgregarOtroProducto = () => {
    navigate("/", {
      state: {
        irAProductos: true,
        productosSeleccionados,
        scrollTo: "productos-typo",
      },
    });
  };

  // Maneja el click en "Limpiar datos"
  const handleLimpiar = () => {
    setForm({ nombre: "", email: "", mensaje: "" });
    setErrors({});
    setEnviado(false);
    setProductosSeleccionados([]); // Limpia también los productos seleccionados
    navigate(location.pathname, { replace: true, state: {} });
  };

  // Elimina un producto seleccionado
  const handleEliminarProducto = (idxEliminar) => {
    const nuevosProductos = productosSeleccionados.filter((_, idx) => idx !== idxEliminar);
    setProductosSeleccionados(nuevosProductos);
    setEnviado(false);
    navigate(location.pathname, {
      replace: true,
      state: {
        ...location.state,
        productosSeleccionados: nuevosProductos,
      },
    });
  };

  return (
    // Contenedor principal centrado vertical y horizontalmente
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        mt: 4,
      }}
    >
      {/* Tarjeta de Material UI para el formulario */}
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        {/* Título del formulario */}
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Contáctanos
        </Typography>
        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Campo para el nombre */}
          <TextField
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.nombre}
            helperText={errors.nombre}
            sx={{ mb: 2 }}
          />
          {/* Campo para el email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
          />
          {/* Campo para el mensaje con iconos de eliminar por producto */}
          <TextField
            label="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={Math.max(4, productosSeleccionados.length)}
            error={!!errors.mensaje}
            helperText={errors.mensaje}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: productosSeleccionados.length > 0 ? (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {productosSeleccionados.map((prod, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleEliminarProducto(idx)}
                        aria-label="Eliminar producto"
                        sx={{ p: 0.5, mr: 1 }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" sx={{ color: "#333" }}>
                        Producto {idx + 1}: {prod.titulo}
                        {prod.nombreSeleccionado
                          ? ` (${prod.nombreSeleccionado})`
                          : ""}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : null,
            }}
          />
          {/* Mensaje de éxito al enviar */}
          {enviado && (
            <Typography sx={{ color: "green", mb: 2, textAlign: "center" }}>
              Enviado Con Éxito!
            </Typography>
          )}
          {/* Botón para agregar otro producto si hay productos seleccionados y no se ha enviado */}
          {productosSeleccionados.length > 0 && !enviado && (
            todosAgregados ? (
              <Typography
                sx={{
                  color: "orange",
                  mb: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Están todos los productos agregados
              </Typography>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mb: 2 }}
                onClick={handleAgregarOtroProducto}
              >
                Agregar otro producto
              </Button>
            )
          )}
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Botón para enviar el formulario */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ flex: 1 }}
            >
              Enviar
            </Button>
            {/* Botón para limpiar datos, siempre visible */}
            <Button
              variant="outlined"
              color="error"
              fullWidth
              sx={{ flex: 1 }}
              onClick={handleLimpiar}
            >
              Limpiar datos
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default Formulario;
