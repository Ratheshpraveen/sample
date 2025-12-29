import React from 'react';
import Card from '../components/Card';
import './ExamplePage.css';

const ExamplePage = () => {
  return (
    <div className="example-page">
      <h1>Card Component Examples</h1>
      <div className="card-grid">
        {/* Basic Card */}
        <Card 
          title="Basic Card" 
          content="This is a simple card with just a title and content."
        />

        {/* Card with Image */}
        <Card 
          title="Image Card" 
          content="A card that includes an image alongside its content."
          imageUrl="https://via.placeholder.com/300x200"
          imageAlt="Placeholder image"
        />

        {/* Card with Custom Styling */}
        <Card 
          title="Custom Styled Card" 
          content="This card demonstrates custom styling and additional props."
          className="highlighted-card"
          onClick={() => alert('Card clicked!')}
        />

        {/* Card with Long Content */}
        <Card 
          title="Long Content Card" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget ultricies tincidunt, velit velit bibendum velit, vel bibendum velit velit sit amet velit."
        />
      </div>
    </div>
  );
};

export default ExamplePage;
