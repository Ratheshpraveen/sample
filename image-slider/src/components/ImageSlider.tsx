import React, { useState } from 'react';
import { Box, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// Import images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' }
];

const ImageSlider: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box 
      sx={{ 
        maxWidth: 800, 
        flexGrow: 1, 
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Box 
        component="img"
        sx={{
          height: 500,
          maxWidth: 800,
          overflow: 'hidden',
          width: '100%',
          objectFit: 'cover'
        }}
        src={images[activeStep].src}
        alt={images[activeStep].alt}
      />
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default ImageSlider;
