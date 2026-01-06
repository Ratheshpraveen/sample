import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({
  title, 
  content, 
  image, 
  actions, 
  variant = 'default', 
  onClick
}) => {
  // Determine card classes based on variant
  const cardClasses = [
    styles.card,
    styles[variant],
    onClick ? styles.clickable : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
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
            {actions.map((action, index) => (
              <button 
                key={index} 
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick();
                }}
                className={styles.cardActionButton}
              >
                {action.label}
              </button>
            ))}
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
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })),
  onClick: PropTypes.func
};

export default Card;
