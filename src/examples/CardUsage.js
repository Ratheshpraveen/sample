import React from 'react';
import Card from '../components/Card';

const CardUsage = () => {
  // Example of handling card click
  const handleCardClick = (title) => {
    console.log(`Card clicked: ${title}`);
  };

  return (
    <div className="card-showcase">
      {/* Default Card */}
      <Card 
        title="Default Card" 
        description="This is a default card with standard styling"
        onClick={() => handleCardClick('Default Card')}
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        description="A card with an image and interactive elements"
        image="/path/to/sample-image.jpg"
        variant="elevated"
        onClick={() => handleCardClick('Image Card')}
      />

      {/* Compact Variant */}
      <Card 
        title="Compact Card" 
        description="A more condensed card layout"
        variant="compact"
        onClick={() => handleCardClick('Compact Card')}
      />

      {/* Outlined Variant */}
      <Card 
        title="Outlined Card" 
        description="Card with an outlined style"
        variant="outlined"
        onClick={() => handleCardClick('Outlined Card')}
      />

      {/* Custom Styled Card */}
      <Card 
        title="Custom Styled Card" 
        description="A card with additional custom className"
        variant="default"
        className="custom-card-style"
        onClick={() => handleCardClick('Custom Styled Card')}
      />
    </div>
  );
};

export default CardUsage;

// Usage Notes:
// 1. The Card component supports multiple variants: 
//    - default (standard styling)
//    - outlined (border-focused design)
//    - elevated (shadow effect)
//    - compact (reduced padding)
// 
// 2. Props:
//    - title: Main heading of the card
//    - description: Descriptive text
//    - image (optional): Background or featured image
//    - variant: Styling variant of the card
//    - onClick: Click handler for the entire card
//    - className: Additional custom styling
