import React from 'react';
import Card from '../components/Card';

const CardExample: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
      <Card 
        title="Sample Card" 
        description="This is a reusable card component with multiple features."
        imageUrl="https://picsum.photos/300/200"
        actionButtons={[
          <button key="action1" onClick={handleButtonClick}>
            Learn More
          </button>,
          <button key="action2" onClick={handleButtonClick}>
            Contact
          </button>
        ]}
        onClick={() => console.log('Card clicked!')}
      />
      
      <Card 
        title="Simple Card" 
        description="A card without an image and with fewer features."
      />
    </div>
  );
};

export default CardExample;
