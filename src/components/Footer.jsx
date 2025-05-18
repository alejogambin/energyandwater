import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '57px',
                backgroundColor: '#4c4c4c',
                color: '#fff',
            }}
        >
            <Typography variant="subtitle1">
                &copy; {new Date().getFullYear()} Derechos reservados. Antiguedades Sthandier
            </Typography>
        </Box>
    );

}

export default Footer;
