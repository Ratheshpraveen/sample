import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';
import CardActions from './CardActions';
import './Card.css';

const Card = ({ 
  variant = 'basic', 
  children, 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={`card card-${variant} ${className}`} 
      style={style}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Media = CardMedia;
Card.Actions = CardActions;

Card.propTypes = {
  variant: PropTypes.oneOf(['basic', 'elevated', 'outlined', 'media']),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Card;
