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
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const opciones = [
  { id: 1, nombre: "Home", link: "/" },
  { id: 2, nombre: "Productos", link: "/products" },
  { id: 3, nombre: "Contacto", link: "/contacto" },
  { id: 5, nombre: "Preguntas Frecuentes", link: "/preguntas" }
];

// Componente Header que representa la barra de navegación superior
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forceStatic, setForceStatic] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // El header siempre debe ser visible y con color en productos
    setForceStatic(location.pathname !== "/" || location.pathname === "/products");
  }, [location.pathname]);

  useEffect(() => {
    if (!forceStatic) {
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [forceStatic]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleNavClick = (link) => (e) => {
    e.preventDefault();
    if (link === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setDrawerOpen(false);
      return;
    }
    if (link === "/products") {
      navigate("/", { state: { irAProductos: true, scrollTo: "productos-inicio" } });
      setDrawerOpen(false);
      return;
    }
    navigate(link);
    setForceStatic(link !== "/" || link === "/products");
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Barra de navegación superior */}
      <AppBar
        position={forceStatic ? "static" : "fixed"}
        sx={{
          backgroundColor: forceStatic
            ? "#bfafa0"
            : scrolled
            ? "#bfafa0"
            : "transparent",
          boxShadow: forceStatic || scrolled ? 2 : 0,
          transition: "background-color 0.3s, box-shadow 0.3s"
        }}
      >
        <Toolbar>
          {/* Logo y nombre de la aplicación */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Logo de la aplicación */}
            <Avatar
              alt="Logo"
              src="src/img/logo.jpeg"
              sx={{ marginRight: 1 }}
            />
            <Typography variant="h6"> Antigüedades Sthandier</Typography>
          </Box>
          {/* Menú de navegación para pantallas grandes */}
          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            {opciones.map((opcion) => (
              <Link
                key={opcion.id}
                href={opcion.link}
                color="inherit"
                underline="none"
                sx={{
                  margin: 2,
                  position: "relative",
                  "&:hover::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: "2px",
                    backgroundColor: "#fff",
                    borderRadius: "2px",
                  }
                }}
                onClick={handleNavClick(opcion.link)}
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
            <ListItem
              button
              component="a"
              href={opcion.link}
              key={opcion.id}
              onClick={handleNavClick(opcion.link)}
            >
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
