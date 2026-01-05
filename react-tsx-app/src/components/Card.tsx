import React from 'react';
import styles from './Card.module.css';

// Define the interface for Card component props
interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  actions?: React.ReactNode;
  onClick?: () => void;
}

// Card component with TypeScript type definitions
const Card: React.FC<CardProps> = ({
  title, 
  content, 
  imageUrl, 
  actions,
  onClick
}) => {
  return (
    <div 
      className={styles.card} 
      onClick={onClick}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className={styles.cardImage} 
        />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{content}</p>
        {actions && (
          <div className={styles.cardActions}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

// Default props for optional parameters
Card.defaultProps = {
  imageUrl: '',
  actions: null,
  onClick: () => {}
};

export default Card;
