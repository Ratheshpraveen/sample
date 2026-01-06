import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <Card title="Welcome to My App">
        <p>This is a sample card component with some content.</p>
      </Card>

      <Card 
        title="Clickable Card" 
        onClick={() => alert('Card clicked!')}
        className="hover:bg-gray-100"
      >
        <p>Click me to see an alert!</p>
      </Card>
    </div>
  );
};

export default App;
