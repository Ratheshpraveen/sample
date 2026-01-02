import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ 
  title, 
  subtitle, 
  className = '', 
  style = {} 
}) => {
  return (
    <div className={`card-header ${className}`} style={style}>
      <h3 className="card-header-title">{title}</h3>
      {subtitle && <p className="card-header-subtitle">{subtitle}</p>}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default CardHeader;
