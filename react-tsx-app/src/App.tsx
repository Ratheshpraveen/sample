import React from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  ThemeProvider, 
  createTheme 
} from '@mui/material'
import ImageSlider from './components/ImageSlider'
import './App.css'

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ marginBottom: 3 }}
          >
            Image Slider
          </Typography>
          
          <ImageSlider />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
