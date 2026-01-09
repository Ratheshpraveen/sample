import React from 'react';
import Card from '../components/Card';
import Button from '@mui/material/Button'; // Assuming you're using Material-UI

const CardExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
      {/* Card with image */}
      <Card
        imageUrl="https://example.com/sample-image.jpg"
        title="Product Showcase"
        description="Explore our latest product line with innovative features."
        actions={
          <>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
            <Button variant="outlined" color="secondary">
              Add to Cart
            </Button>
          </>
        }
        onClick={() => console.log('Card clicked!')}
      />

      {/* Card without image */}
      <Card
        title="Simple Information Card"
        description="A clean and minimalist card design for displaying concise information."
        actions={
          <Button variant="text" color="primary">
            View Details
          </Button>
        }
      />

      {/* Custom styled card */}
      <Card
        title="Custom Styled Card"
        description="Demonstrates how to apply custom className for unique styling."
        className="custom-card-style"
      />
    </div>
  );
};

export default CardExample;
