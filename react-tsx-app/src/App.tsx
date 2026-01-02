import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked!');
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexWrap: 'wrap' 
    }}>
      <Card 
        title="Welcome Card" 
        content="This is a sample card component with optional image and click handler."
        imageUrl="https://via.placeholder.com/300"
        onClick={handleCardClick}
      />
      <Card 
        title="Another Card" 
        content="You can create multiple cards with different content and styles."
      />
    </div>
  );
};

export default App;
