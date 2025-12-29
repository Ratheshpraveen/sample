import React from 'react';
import Card from './components/Card';

function App() {
  const handleCardAction = () => {
    alert('Card action clicked!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card 
        title="Sample Card" 
        description="This is a flexible and customizable card component with optional image and action button."
        imageUrl="https://via.placeholder.com/350x200"
        actionText="Learn More"
        onActionClick={handleCardAction}
        variant="elevated"
      />
    </div>
  );
}

export default App;
