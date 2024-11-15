import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        },
        primary: {
        main: '#1E88E5',
        },
        secondary: {
        main: '#4CAF50',
        },
        background: {
        default: '#F5F5F5',
        },
        text: {
        primary: '#212121',
        secondary: '#757575',
        },
        error: {
        main: '#E53935',
        },
        warning: {
        main: '#FFEB3B',
        },
    },
});

export default theme;
