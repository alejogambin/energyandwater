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

//header component
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const opciones = [
    { id: 1, nombre: "Home", link: "/" },
    { id: 2, nombre: "Productos", link: "/products" },
    { id: 3, nombre: "Contacto", link: "#" },
    { id: 4, nombre: "Quienes Somos?", link: "/nosotros" },
    { id: 5, nombre: "Preguntas Frecuentes", link: "/preguntas" }
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#CC6666" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* logo de aplicacion */}
            <Avatar
              alt="Logo"
              src="src/img/logo.jpeg"
              sx={{ marginRight: 1 }}
            />
            <Typography variant="h6"> Antiguedades Sthandier</Typography>
          </Box>
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
          {/* Icono de menu para dispositivos moviles */}
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

     <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
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

export default Header;
