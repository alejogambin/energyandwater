import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                height: '57px',
                backgroundColor: '#804040',
                color: '#fff'
            }}
        >
            <Typography variant="subtitle1">
                &copy; {new Date().getFullYear()} Derechos reservados. Antiguedades Sthandier
            </Typography>
        </Box>
    );

}

export default Footer;
