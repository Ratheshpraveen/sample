import React from 'react';
import styles from './Card.module.css';

/**
 * Props interface for the Card component
 */
interface CardProps {
  /**
   * The title of the card
   */
  title?: string;

  /**
   * The main content of the card
   */
  content?: string;

  /**
   * Optional image URL for the card
   */
  image?: string;

  /**
   * Optional click handler for the card
   */
  onClick?: () => void;

  /**
   * Additional CSS classes to apply to the card
   */
  className?: string;

  /**
   * Children components to be rendered inside the card
   */
  children?: React.ReactNode;
}

/**
 * Reusable Card component with flexible configuration
 * 
 * @param props - Card component properties
 * @returns Rendered Card component
 */
const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  onClick,
  className,
  children,
}) => {
  return (
    <div 
      className={`${styles.card} ${className || ''}`} 
      onClick={onClick}
    >
      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className={styles.cardContent}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {content && <p className={styles.cardText}>{content}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
