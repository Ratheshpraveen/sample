import React from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleCardClick = () => {
    alert('Card clicked!')
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        <Card 
          title="React Logo" 
          content="Official React Logo" 
          imageUrl={reactLogo}
          onClick={handleCardClick}
        />
        <Card 
          title="Vite Logo" 
          content="Vite Development Tool" 
          imageUrl={viteLogo}
        />
        <Card 
          title="Simple Card" 
          content="This is a simple card component without an image"
        />
      </div>
    </>
  )
}

export default App
