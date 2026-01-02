import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="Sample Card 1" 
          description="This is a description for the first card"
          imageUrl="https://via.placeholder.com/350x200"
          onClick={() => console.log('Card 1 clicked')}
        />
        <Card 
          title="Sample Card 2" 
          description="Another card with a different description"
          imageUrl="https://via.placeholder.com/350x200"
        />
        <Card 
          title="Sample Card 3" 
          description="A third card to demonstrate flexibility"
        />
      </div>
    </div>
  );
};

export default App;
