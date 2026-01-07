import React, { useState } from 'react';
import { Box, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const images = [
  '/src/assets/image1.jpg',
  '/src/assets/image2.jpg',
  '/src/assets/image3.jpg',
  '/src/assets/image4.jpg'
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
          height: 400,
          maxWidth: 800,
          overflow: 'hidden',
          width: '100%',
          objectFit: 'cover'
        }}
        src={images[activeStep]}
        alt={`Slider image ${activeStep + 1}`}
      />
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 800, width: '100%' }}
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
