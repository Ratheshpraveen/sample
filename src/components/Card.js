import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  title, 
  content, 
  image, 
  actions, 
  className = '', 
  onClick 
}) => {
  return (
    <div 
      className={`card ${className}`} 
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
        
        {actions && actions.length > 0 && (
          <div className="card-actions">
            {actions.map((action, index) => (
              <button 
                key={index}
                className="card-action-btn"
                onClick={action.onClick}
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
  className: PropTypes.string,
  onClick: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  )
};

Card.defaultProps = {
  title: '',
  content: '',
  image: '',
  className: '',
  onClick: () => {},
  actions: []
};

export default Card;
