import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      gap: '20px'
    }}>
      <Card title="Basic Card">
        <p>This is a simple card component with a title.</p>
      </Card>

      <Card 
        title="Clickable Card" 
        onClick={() => alert('Card clicked!')}
        className="hover-effect"
      >
        <p>Click me! I have an onClick handler.</p>
      </Card>

      <Card>
        <h3>Cardless Title</h3>
        <p>A card without a predefined title.</p>
      </Card>
    </div>
  );
};

export default App;
