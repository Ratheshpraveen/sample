import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  variant?: 'default' | 'compact' | 'elevated';
  actions?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  variant = 'default',
  actions,
  onClick,
  className = '',
}) => {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className}`} 
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
        
        {actions && (
          <div className={styles.cardActions}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'compact', 'elevated']),
  actions: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Card;
