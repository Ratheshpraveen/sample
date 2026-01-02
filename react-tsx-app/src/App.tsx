import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Card Component Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="Sample Card 1" 
          content="This is a sample card with some descriptive text." 
          imageUrl="/vite.svg"
          onClick={() => alert('Card 1 clicked!')}
        />
        <Card 
          title="Sample Card 2" 
          content="Another card with different content and no image."
        />
        <Card 
          title="Sample Card 3" 
          content="A third card to demonstrate flexibility."
          className="bg-blue-100"
        />
      </div>
    </div>
  );
};

export default App;
