import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleCardClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Card Component Demo</h1>
      <p>Card Click Count: {clickCount}</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card
          title="Welcome to React"
          content="This is a reusable card component with flexible props and inline styling."
          imageUrl="/vite.svg"
          onClick={handleCardClick}
          className="demo-card"
        />
        <Card
          title="No Image Card"
          content="This card demonstrates optional image prop. It also shows how click handlers can be optional."
        />
      </div>
    </div>
  );
}

export default App;
