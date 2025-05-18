import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#804040',
                color: '#fff',
                px: 4,
                py: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                height: { xs: '100px', md: '24.5px' },
                gap: { xs: 1, md: 0 },
            }}
        >
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    width: { xs: '100%', md: 'auto' },
                    mt: { xs: 1, md: 0 }
                }}
            >
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

export default Footer;