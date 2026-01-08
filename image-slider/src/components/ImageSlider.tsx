import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// Import images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const images = [image1, image2, image3, image4];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton 
        onClick={handlePrev} 
        sx={{ 
          position: 'absolute', 
          left: 10, 
          zIndex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowBack sx={{ color: 'white' }} />
      </IconButton>

      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: 400,
          objectFit: 'cover',
        }}
      />

      <IconButton 
        onClick={handleNext} 
        sx={{ 
          position: 'absolute', 
          right: 10, 
          zIndex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowForward sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
