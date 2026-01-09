import React from 'react';
import styles from './Card.module.css';

// Define the prop types for type safety
interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title, 
  description, 
  image, 
  onClick, 
  className = ''
}) => {
  return (
    <div 
      className={`${styles.card} ${className}`} 
      onClick={onClick}
    >
      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

// Default props for optional parameters
Card.defaultProps = {
  image: undefined,
  onClick: () => {},
  className: ''
};

export default Card;
