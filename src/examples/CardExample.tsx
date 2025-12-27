import React from 'react';
import Card from '../components/Card';
import '../components/Card.css';

const CardExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {/* Basic Card */}
      <Card 
        title="Basic Card" 
        description="This is a simple card with a title and description."
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        description="A card with an image and description."
        imageUrl="https://via.placeholder.com/300x200"
        imageAlt="Placeholder Image"
      />

      {/* Card with Custom Content and Actions */}
      <Card 
        title="Advanced Card"
        description="A card with custom content and actions."
        imageUrl="https://via.placeholder.com/300x200"
        actions={
          <>
            <button>Action 1</button>
            <button>Action 2</button>
          </>
        }
      >
        <div>
          <p>This is a custom content area.</p>
          <ul>
            <li>You can add</li>
            <li>Any type of content</li>
            <li>Inside the card</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default CardExample;
