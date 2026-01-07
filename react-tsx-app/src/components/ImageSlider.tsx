import React, { useState } from 'react';
import { 
  Box, 
  MobileStepper, 
  Button, 
  useTheme 
} from '@mui/material';
import { 
  KeyboardArrowLeft, 
  KeyboardArrowRight 
} from '@mui/icons-material';

// Import sample images
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
  const theme = useTheme();
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
        maxWidth: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2)
      }}
    >
      <Box 
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 400,
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: theme.shadows[3]
        }}
      >
        <img
          src={images[activeStep].src}
          alt={images[activeStep].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ 
          maxWidth: 600, 
          width: '100%', 
          marginTop: theme.spacing(2) 
        }}
        nextButton={
          <Button 
            size="small" 
            onClick={handleNext}
            disabled={false}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            onClick={handleBack}
            disabled={false}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default ImageSlider;
