import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // We'll create this CSS file next

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  actions 
}) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  )
};

Card.defaultProps = {
  imageUrl: null,
  actions: []
};

export default Card;
