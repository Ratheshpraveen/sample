import React, { useState, useEffect } from 'react';
import { Box, IconButton, Container } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// Import sample images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const ImageSlider: React.FC = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        maxWidth: 'lg' 
      }}
    >
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: 800, 
          height: { xs: 300, sm: 400, md: 500 }, 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        {/* Previous Button */}
        <IconButton 
          onClick={handlePrevious}
          sx={{ 
            position: 'absolute', 
            left: 10, 
            zIndex: 2, 
            color: 'white', 
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Image Display */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            transition: 'opacity 0.5s ease-in-out',
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Next Button */}
        <IconButton 
          onClick={handleNext}
          sx={{ 
            position: 'absolute', 
            right: 10, 
            zIndex: 2, 
            color: 'white', 
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ImageSlider;
