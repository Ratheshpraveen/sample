import React from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="App">
      <h1>Button Component Showcase</h1>
      <div style={{ display: 'flex', gap: '10px', margin: '20px' }}>
        <Button onClick={handleClick}>Default Primary</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button size="small" variant="secondary">Small Button</Button>
        <Button size="large">Large Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </div>
  )
}

export default App
