import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          textAlign: 'center', 
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Image Slider
        </Typography>
        <ImageSlider />
      </Box>
    </Container>
  );
}

export default App;
