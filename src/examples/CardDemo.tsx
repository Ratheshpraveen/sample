import React from 'react';
import Card from '../components/Card';

/**
 * CardDemo showcases different variations of the Card component
 * Demonstrates flexibility and customization options
 */
const CardDemo: React.FC = () => {
  return (
    <div className="card-demo-container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Basic Text Card */}
      <Card 
        title="Basic Information Card" 
        content="This is a simple card with just text content. It demonstrates the basic usage of the Card component." 
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        content="A card that includes an image alongside text content." 
        image={{
          src: '/path/to/sample-image.jpg',
          alt: 'Sample card image'
        }}
      />

      {/* Card with Action Buttons */}
      <Card 
        title="Card with Actions" 
        content="This card includes action buttons to demonstrate interactive capabilities." 
        actions={[
          {
            label: 'Learn More',
            onClick: () => alert('Learn More clicked!')
          },
          {
            label: 'Close',
            onClick: () => alert('Close clicked!')
          }
        ]}
      />

      {/* Fully Customized Card */}
      <Card 
        title="Fully Customized Card" 
        content="A card that shows multiple customization options including image and actions." 
        image={{
          src: '/path/to/another-image.jpg',
          alt: 'Another sample image'
        }}
        actions={[
          {
            label: 'View Details',
            onClick: () => console.log('View Details clicked')
          }
        ]}
      />
    </div>
  );
};

export default CardDemo;
