import React from 'react';
import Card from './Card';

const CardExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card 
        title="Default Card" 
        description="This is a default card with standard styling."
        image="https://via.placeholder.com/350x200"
        actions={
          <>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Learn More
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
              Close
            </button>
          </>
        }
      />
      
      <Card 
        title="Outlined Card" 
        description="This card uses the outlined variant for a different look."
        variant="outlined"
        image="https://via.placeholder.com/350x200"
      />
      
      <Card 
        title="Elevated Card" 
        description="An elevated card with a more pronounced shadow effect."
        variant="elevated"
      />
    </div>
  );
};

export default CardExample;
