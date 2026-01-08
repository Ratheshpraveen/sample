import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ImageSlider from './components/ImageSlider';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ImageSlider />
      </div>
    </ThemeProvider>
  );
}

export default App;
