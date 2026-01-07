import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  title, 
  content, 
  image, 
  onClick, 
  className = '',
  imageSize = 'cover',
  titleTag = 'h3',
  disabled = false
}) => {
  const TitleTag = titleTag;
  const cardClasses = [
    'card', 
    className, 
    disabled ? 'card-disabled' : ''
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <div 
      className={cardClasses} 
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {image && (
        <div 
          className="card-image" 
          style={{ 
            height: imageSize === 'contain' ? 'auto' : '200px' 
          }}
        >
          <img 
            src={image} 
            alt={title || 'Card image'} 
            style={{ objectFit: imageSize }}
          />
        </div>
      )}
      <div className="card-content">
        {title && (
          <TitleTag className="card-title">{title}</TitleTag>
        )}
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
  className: PropTypes.string,
  imageSize: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  disabled: PropTypes.bool
};

export default Card;
