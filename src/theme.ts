import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, blue, green, grey } from '@mui/material/colors';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
      dark: blue[700],
    },
    secondary: {
      main: green[500],
      light: green[300],
      dark: green[700],
    },
    error: {
      main: red[500],
    },
    background: {
      default: grey[100],
      paper: '#ffffff',
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
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
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
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
});

// Make the theme responsive
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;

// Dark mode theme (optional)
export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: '#ffffff',
      secondary: grey[400],
    },
  },
});
