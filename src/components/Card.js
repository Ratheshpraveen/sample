import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  title, 
  content, 
  image, 
  onClick, 
  className = '' 
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 300);
    
    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event);
    }
  };

  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
    >
      {image && (
        <div className="card-image">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            loading="lazy"
          />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Card;


