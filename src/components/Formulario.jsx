import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const Formulario = ({ mensajeInicial }) => {
  const location = useLocation();
  const mensaje =
    mensajeInicial ||
    location.state?.mensaje ||
    "";

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: mensaje,
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setEnviado(false);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setEnviado(true);
      setForm({ nombre: "", email: "", mensaje: "" });
      setErrors({});
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        mt: 4,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
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
          {enviado && (
            <Typography sx={{ color: "green", mb: 2, textAlign: "center" }}>
              Enviado Con Éxito!
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Formulario;