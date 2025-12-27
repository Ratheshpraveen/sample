import React from 'react';
import Card from '../components/Card';

const Cardshowcase: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked!');
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card 
        title="Nature Landscape" 
        description="A beautiful landscape with mountains and trees"
        imageUrl="https://images.unsplash.com/photo-1470770841072-f978f4a9c5a0"
        onClick={handleCardClick}
      />
      <Card 
        title="City Skyline" 
        description="Modern cityscape with tall skyscrapers"
        imageUrl="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b"
      />
      <Card 
        title="Simple Card" 
        description="A card without an image to show flexibility"
      />
    </div>
  );
};

export default Cardshowcase;
