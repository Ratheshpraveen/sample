import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

// Create a function to generate the theme
export const createAppTheme = (mode: 'light' | 'dark') => {
  return responsiveFontSizes(createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? blue[700] : blue[300],
      },
      background: {
        default: mode === 'light' ? '#f4f4f4' : grey[900],
        paper: mode === 'light' ? '#ffffff' : grey[800],
      },
      text: {
        primary: mode === 'light' ? grey[900] : '#ffffff',
        secondary: mode === 'light' ? grey[600] : grey[400],
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 500,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
  }));
};
