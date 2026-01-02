import React from 'react';
import Card from '../components/Card';

const CardUsage: React.FC = () => {
  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Default Card */}
      <Card 
        title="Default Card" 
        description="This is a default card with standard styling."
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        description="A card with an image and default styling."
        image="https://example.com/sample-image.jpg"
      />

      {/* Interactive Card */}
      <Card 
        title="Interactive Card" 
        description="Click me! I have an onClick handler."
        onClick={handleCardClick}
      />

      {/* Outlined Variant */}
      <Card 
        title="Outlined Card" 
        description="A card with an outlined style."
        variant="outlined"
      />

      {/* Elevated Variant */}
      <Card 
        title="Elevated Card" 
        description="A card with a more pronounced shadow."
        variant="elevated"
      />

      {/* Compact Variant */}
      <Card 
        title="Compact Card" 
        description="A smaller, more compact card design."
        variant="compact"
      />
    </div>
  );
};

export default CardUsage;
