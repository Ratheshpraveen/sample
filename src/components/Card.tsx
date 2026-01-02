import React from 'react';
import styles from './Card.module.css';

// Define the prop types for the Card component
export interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'compact';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onClick,
  className = '',
  variant = 'default'
}) => {
  // Combine base card class with variant and custom className
  const cardClasses = `
    ${styles.card} 
    ${styles[variant]} 
    ${className}
    ${onClick ? styles.interactive : ''}
  `.trim();

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
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

export default Card;
