import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  content, 
  image, 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      className={} 
      onClick={onClick}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
      </div>
    </div>
  );
};

export default Card;








