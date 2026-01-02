import React from 'react';
import Card from '../components/Card';
import Button from '@mui/material/Button'; // Assuming Material-UI for buttons

const CardExamples: React.FC = () => {
  return (
    <div>
      {/* Basic Information Card */}
      <Card 
        title="Welcome to Our Platform" 
        description="Discover amazing features and services tailored just for you."
        variant="basic"
      />

      {/* Profile Card */}
      <Card 
        title="John Doe" 
        description="Software Engineer | Open Source Enthusiast"
        image="/path/to/profile-image.jpg"
        variant="with-image"
        actions={
          <>
            <Button variant="contained">Connect</Button>
            <Button variant="outlined">View Profile</Button>
          </>
        }
      />

      {/* Product Card */}
      <Card 
        title="Smart Wireless Headphones" 
        description="Noise cancellation, 20hr battery life, premium sound quality"
        image="/path/to/headphones.jpg"
        variant="horizontal"
        actions={
          <>
            <Button variant="contained" color="primary">Buy Now</Button>
            <Button variant="outlined">Learn More</Button>
          </>
        }
      />

      {/* Action Card */}
      <Card 
        title="Complete Your Profile" 
        description="Add more details to get personalized recommendations"
        variant="elevated"
        actions={
          <Button variant="contained" color="secondary">Update Profile</Button>
        }
      />
    </div>
  );
};

export default CardExamples;
