import React from 'react';
import PropTypes from 'prop-types';

const CardMedia = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  type = 'image' 
}) => {
  if (type === 'image') {
    return (
      <div className={`card-media ${className}`} style={style}>
        <img 
          src={src} 
          alt={alt} 
          className="card-media-image" 
        />
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className={`card-media ${className}`} style={style}>
        <video 
          src={src} 
          alt={alt} 
          className="card-media-video"
          controls
        />
      </div>
    );
  }

  return null;
};

CardMedia.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['image', 'video'])
};

export default CardMedia;
