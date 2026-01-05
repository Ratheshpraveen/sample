import React from 'react';
import PropTypes from 'prop-types';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  onClick 
}) => {
  return (
    <div 
      className="card" 
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func
};

Card.defaultProps = {
  description: '',
  image: '',
  onClick: undefined
};

export default Card;
