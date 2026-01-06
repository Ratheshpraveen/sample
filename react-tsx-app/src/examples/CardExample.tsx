import React from 'react';
import Card from '../components/Card';

const CardExample: React.FC = () => {
  return (
    <div className="card-examples">
      {/* Basic Card */}
      <Card 
        title="Basic Card" 
        content="This is a simple card with basic content."
      />

      {/* Card with Image */}
      <Card 
        title="Card with Image" 
        content="A card that includes an image." 
        image={{
          src: "/path/to/image.jpg",
          alt: "Example image"
        }}
      />

      {/* Elevated Card */}
      <Card 
        title="Elevated Card" 
        content="This card has an elevated style." 
        variant="elevated"
      />

      {/* Compact Card */}
      <Card 
        title="Compact Card" 
        content="A more compact version of the card." 
        variant="compact"
      />

      {/* Card with Actions */}
      <Card 
        title="Card with Actions" 
        content="This card includes action buttons." 
        actions={[
          { 
            label: "Learn More", 
            onClick: () => console.log("Learn More clicked") 
          },
          { 
            label: "Close", 
            onClick: () => console.log("Close clicked") 
          }
        ]}
      />

      {/* Fully Customized Card */}
      <Card 
        title="Fully Customized Card" 
        content="A card with multiple customization options." 
        variant="outlined"
        image={{
          src: "/path/to/another-image.jpg",
          alt: "Customized image"
        }}
        actions={[
          { 
            label: "Action 1", 
            onClick: () => console.log("Action 1 clicked") 
          }
        ]}
        className="custom-card-class"
      />
    </div>
  );
};

export default CardExample;

// Usage Notes:
// - The Card component supports various props for customization
// - Variants include: 'default', 'elevated', 'outlined', 'compact'
// - You can add images, actions, and custom classes
// - Prop types ensure type safety and provide clear component interface
