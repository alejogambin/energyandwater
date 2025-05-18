import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

// Componente funcional que representa el formulario de contacto
const Formulario = ({ mensajeInicial }) => {
  // Obtiene la ubicación actual para acceder a datos pasados por navegación
  const location = useLocation();
  // Determina el mensaje inicial del formulario (puede venir por props o por navegación)
  const mensaje =
    mensajeInicial ||
    location.state?.mensaje ||
    "";

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

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setEnviado(false);
  };

  // Valida los campos del formulario antes de enviar
  const validate = () => {
    let temp = {};
    if (!form.nombre.trim()) {
      temp.nombre = "El nombre es obligatorio";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(form.nombre)) {
      temp.nombre = "El nombre solo debe contener letras y espacios";
    }
    if (!form.email.trim()) {
      temp.email = "El email es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      temp.email = "El email no es válido debe contener @ y un dominio";
    }
    if (!form.mensaje.trim()) temp.mensaje = "El mensaje es obligatorio";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setEnviado(true); // Marca como enviado
      setForm({ nombre: "", email: "", mensaje: "" }); // Limpia el formulario
      setErrors({}); // Limpia los errores
    }
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
          {/* Campo para el mensaje */}
          <TextField
            label="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            error={!!errors.mensaje}
            helperText={errors.mensaje}
            sx={{ mb: 2 }}
          />
          {/* Mensaje de éxito al enviar */}
          {enviado && (
            <Typography sx={{ color: "green", mb: 2, textAlign: "center" }}>
              Enviado Con Éxito!
            </Typography>
          )}
          {/* Botón para enviar el formulario */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default Formulario;