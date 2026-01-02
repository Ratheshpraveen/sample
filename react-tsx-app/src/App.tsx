import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="First Card" 
          content="This is the content of the first card. It can be used to display various types of information."
          imageUrl="https://via.placeholder.com/350x200"
          onClick={handleCardClick}
        />
        <Card 
          title="Second Card" 
          content="Another card with some interesting content. You can customize it as needed."
          imageUrl="https://via.placeholder.com/350x200"
        />
        <Card 
          title="Third Card" 
          content="A third card to demonstrate the flexibility of the component."
        />
      </div>
    </div>
  );
};

export default App;
