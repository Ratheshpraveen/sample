import React from 'react';
import Card from '../components/Card';

const CardExample = () => {
  return (
    <div className="card-examples">
      {/* Basic Card with Title and Description */}
      <Card 
        title="Basic Card" 
        description="This is a simple card with just a title and description."
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        description="A card featuring an image" 
        imageUrl="https://via.placeholder.com/300"
        imageAlt="Placeholder image"
      />

      {/* Card with Action Buttons */}
      <Card 
        title="Card with Actions" 
        description="This card demonstrates action buttons"
        actions={[
          { label: 'Learn More', onClick: () => alert('Learn More clicked') },
          { label: 'Close', onClick: () => alert('Close clicked') }
        ]}
      />

      {/* Fully Featured Card */}
      <Card 
        title="Fully Featured Card" 
        description="A card with an image, description, and multiple actions"
        imageUrl="https://via.placeholder.com/300"
        imageAlt="Another placeholder image"
        actions={[
          { label: 'View Details', onClick: () => alert('View Details clicked') },
          { label: 'Share', onClick: () => alert('Share clicked') }
        ]}
      />
    </div>
  );
};

export default CardExample;
