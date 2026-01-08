import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import ImageSlider from './components/ImageSlider'
import './App.css'

function App() {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          textAlign: 'center', 
          my: 4 
        }}
      >
        <Typography variant="h4" gutterBottom>
          Image Slider Demo
        </Typography>
        
        <ImageSlider />
      </Box>
    </Container>
  )
}

export default App
