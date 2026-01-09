import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  image, 
  title, 
  description, 
  actionButtons, 
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
        {description && <p className="card-description">{description}</p>}
        {actionButtons && (
          <div className="card-actions">
            {actionButtons}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  actionButtons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

Card.defaultProps = {
  image: null,
  title: null,
  description: null,
  actionButtons: null,
  className: '',
  onClick: () => {}
};

export default Card;
