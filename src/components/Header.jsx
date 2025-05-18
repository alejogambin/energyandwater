import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Avatar,
  Link,
  Typography,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

// Componente Header que representa la barra de navegación superior
const Header = () => {
  // Estado para controlar si el Drawer (menú lateral) está abierto o cerrado
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para abrir/cerrar el Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Opciones de navegación del menú
  const opciones = [
    { id: 1, nombre: "Home", link: "/" },
    { id: 2, nombre: "Productos", link: "/products" },
    { id: 3, nombre: "Contacto", link: "/contacto" },
    { id: 4, nombre: "Quienes Somos", link: "/nosotros" },
    { id: 5, nombre: "Preguntas Frecuentes", link: "/preguntas" }
  ];

  return (
    <>
      {/* Barra de navegación superior */}
      <AppBar position="static" sx={{ backgroundColor: "#CC6666" }}>
        <Toolbar>
          {/* Logo y nombre de la aplicación */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Logo de la aplicación */}
            <Avatar
              alt="Logo"
              src="src/img/logo.jpeg"
              sx={{ marginRight: 1 }}
            />
            <Typography variant="h6"> Antiguedades Sthandier</Typography>
          </Box>
          {/* Menú de navegación para pantallas grandes */}
          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            {opciones.map((opcion) => (
              <Link
                key={opcion.id}
                href={opcion.link}
                color="inherit"
                underline="none"
                sx={{ margin: 2 }}
              >
                {opcion.nombre}
              </Link>
            ))}
          </Box>
          {/* Icono de menú para dispositivos móviles */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (menú desplegable) para dispositivos móviles */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)} >
        <List>
          {opciones.map((opcion) => (
            <ListItem button component="a" href={opcion.link} key={opcion.id}>
              <ListItemText primary={opcion.nombre} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

// Exporta el componente Header para su uso en otras partes de la aplicación
export default Header;
