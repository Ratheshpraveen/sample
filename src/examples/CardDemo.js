import React from 'react';
import Card from '../components/Card';

const CardDemo = () => {
  return (
    <div className="card-demo-container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      {/* Basic Card with Title and Content */}
      <Card 
        title="Basic Card" 
        content="This is a simple card with just a title and content." 
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        content="A card featuring an image" 
        image="https://via.placeholder.com/300x200" 
      />

      {/* Card with Action Buttons */}
      <Card 
        title="Card with Actions" 
        content="This card demonstrates action buttons" 
        actions={[
          { label: 'Learn More', onClick: () => alert('Learn More clicked') },
          { label: 'Close', onClick: () => alert('Close clicked') }
        ]}
      />

      {/* Card with All Features */}
      <Card 
        title="Full Featured Card" 
        content="A card with an image, title, content, and action buttons" 
        image="https://via.placeholder.com/300x200"
        actions={[
          { label: 'View Details', onClick: () => alert('View Details clicked') },
          { label: 'Share', onClick: () => alert('Share clicked') }
        ]}
      />

      {/* Minimal Card */}
      <Card 
        content="Minimal card with just content" 
      />
    </div>
  );
};

export default CardDemo;
