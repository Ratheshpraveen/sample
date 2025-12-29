import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  title, 
  content, 
  imageUrl, 
  onClick, 
  className = '', 
  children 
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
    >
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title || 'Card image'} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;
