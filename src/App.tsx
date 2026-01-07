import React from 'react'
import './App.css'
import ImageSlider from './components/ImageSlider'
import { Container, Typography } from '@mui/material'

function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Image Slider
      </Typography>
      <ImageSlider />
    </Container>
  )
}

export default App
