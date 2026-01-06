import React from 'react';
import Card from '../components/Card';
import styles from './CardExample.module.css';

const CardExample: React.FC = () => {
  const handleCardClick = () => {
    alert('Card clicked!');
  };

  return (
    <div className={styles.cardContainer}>
      {/* Basic Card with Title and Content */}
      <Card 
        title="Basic Card" 
        content="This is a simple card with a title and content."
      />

      {/* Card with Image */}
      <Card 
        title="Image Card" 
        content="A card featuring an image" 
        image="https://via.placeholder.com/150" 
      />

      {/* Card with Click Handler */}
      <Card 
        title="Clickable Card" 
        content="Click me to trigger an alert!" 
        onClick={handleCardClick}
        className={styles.clickableCard}
      />

      {/* Card with Custom Styling */}
      <Card 
        title="Custom Styled Card" 
        content="This card has custom styling applied" 
        className={styles.customStyledCard}
      />
    </div>
  );
};

export default CardExample;
