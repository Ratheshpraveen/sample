import React from 'react';
import Card from './Card';

const CardDemo: React.FC = () => {
  return (
    <div className="card-demo-container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      {/* Card with title, content, and image */}
      <Card 
        title="Nature Exploration"
        content="Discover the beauty of natural landscapes and breathtaking sceneries around the world."
        imageUrl="https://example.com/nature-image.jpg"
        actions={[
          { label: 'Learn More', onClick: () => console.log('Learn More clicked') },
          { label: 'Share', onClick: () => console.log('Share clicked') }
        ]}
      />

      {/* Card with only title and content */}
      <Card 
        title="Simple Information Card"
        content="A minimalist card design without an image, focusing on textual content."
      />

      {/* Card with custom styling */}
      <Card 
        title="Custom Styled Card"
        content="This card demonstrates how custom styles can be applied to override default styling."
        style={{ 
          backgroundColor: '#f0f0f0', 
          border: '2px solid #007bff',
          borderRadius: '12px' 
        }}
        actions={[
          { label: 'Action', onClick: () => console.log('Custom card action') }
        ]}
      />

      {/* Card with long content */}
      <Card 
        title="Detailed Information"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageUrl="https://example.com/info-image.jpg"
      />
    </div>
  );
};

export default CardDemo;
