import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Componente funcional que representa el pie de página de la aplicación
const Footer = () => {
    return (
        // Contenedor principal del footer con estilos responsivos
        <Box
            sx={{
                backgroundColor: '#804040', // Color de fondo del footer
                color: '#fff', // Color del texto
                px: 4, // Padding horizontal
                py: 2, // Padding vertical
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Columna en móvil, fila en escritorio
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' }, // Centrado en móvil, espacio entre elementos en escritorio
                height: { xs: '100px', md: '24.5px' }, // Altura diferente según el dispositivo
                gap: { xs: 1, md: 0 }, // Espacio entre elementos en móvil
            }}
        >
            {/* Texto de derechos reservados y nombre de la tienda */}
            <Typography
                variant="subtitle1"
                sx={{
                    width: "100%",
                    textAlign: "center",
                    mb: { xs: 1, md: 0 }
                }}
            >
                &copy; {new Date().getFullYear()} Derechos reservados. Antiguedades Sthandier
            </Typography>
            {/* Contenedor de los iconos de redes sociales */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    width: { xs: '100%', md: 'auto' },
                    mt: { xs: 1, md: 0 }
                }}
            >
                {/* Icono y enlace a Facebook */}
                <IconButton
                    component="a"
                    href="https://www.facebook.com/people/Antiguedades-Sthandier/100065257010074/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#fff" }}
                    aria-label="Facebook"
                >
                    <FacebookIcon />
                </IconButton>
                {/* Icono y enlace a Instagram */}
                <IconButton
                    component="a"
                    href="https://www.instagram.com/antiguedades.sthandier/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#fff" }}
                    aria-label="Instagram"
                >
                    <InstagramIcon />
                </IconButton>
                {/* Icono y enlace a WhatsApp */}
                <IconButton
                    component="a"
                    href="https://wa.me/XXXXXXXXXXX"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#fff" }}
                    aria-label="WhatsApp"
                >
                    <WhatsAppIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

// Exporta el componente Footer para su uso en otras partes de la aplicación
export default Footer;