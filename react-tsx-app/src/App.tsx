import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="Sample Card 1" 
          content="This is a description for the first card." 
          imageUrl="/vite.svg"
          onClick={handleCardClick}
        />
        <Card 
          title="Sample Card 2" 
          content="Another card with some interesting content."
          onClick={handleCardClick}
        />
        <Card 
          title="Sample Card 3" 
          content="A third card to demonstrate flexibility."
          imageUrl="/vite.svg"
          className="bg-blue-100"
        />
      </div>
    </div>
  );
};

export default App;
