import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ 
  title, 
  description, 
  image, 
  actions, 
  children, 
  onClick, 
  className 
}) => {
  const cardClasses = `${styles.card} ${className || ''}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className={styles.cardContent}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children && <div className={styles.cardChildren}>{children}</div>}
        {actions && (
          <div className={styles.cardActions}>
            {actions.map((action, index) => (
              <React.Fragment key={index}>{action}</React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  title: '',
  description: '',
  image: '',
  actions: [],
  children: null,
  onClick: () => {},
  className: ''
};

export default Card;
