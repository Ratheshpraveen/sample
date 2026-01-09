import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  actions, 
  onClick, 
  className 
}) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {actions && (
          <div className="card-actions">
            {actions.map((action, index) => (
              <button 
                key={index} 
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick();
                }}
                className="card-action-button"
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
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  onClick: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  title: '',
  description: '',
  imageUrl: '',
  actions: [],
  onClick: () => {},
  className: ''
};

export default Card;
