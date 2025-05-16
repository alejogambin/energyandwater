import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                backgroundColor: '#333',
                color: '#fff',
            }}
        >
            <Typography variant="h6">
                &copy; {new Date().getFullYear()} Your Company Name
            </Typography>
        </Box>
    );

}

export default Footer;
