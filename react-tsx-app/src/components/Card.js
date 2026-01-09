import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ 
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  image: '',
  onClick: () => {},
  className: ''
};

export default Card;
