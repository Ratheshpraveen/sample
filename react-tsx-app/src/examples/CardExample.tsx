import React from 'react';
import Card from '../components/Card';

const CardExample: React.FC = () => {
  return (
    <div className="card-examples">
      {/* Basic Card */}
      <Card 
        title="Basic Card" 
        content="This is a simple card with just text content." 
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        content="A card that includes an image" 
        image={{
          src: "/path/to/example-image.jpg",
          alt: "Example Image"
        }}
      />

      {/* Card with Actions */}
      <Card 
        title="Card with Actions" 
        content="This card demonstrates how to add action buttons" 
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

      {/* Fully Featured Card */}
      <Card 
        title="Comprehensive Card" 
        content="A card that showcases multiple features" 
        image={{
          src: "/path/to/another-image.jpg",
          alt: "Comprehensive Card Image"
        }}
        actions={[
          {
            label: "View Details",
            onClick: () => console.log("View Details clicked")
          }
        ]}
      />
    </div>
  );
};

export default CardExample;
