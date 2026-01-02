import React from 'react';
import PropTypes from 'prop-types';

const CardActions = ({ 
  actions = [], 
  className = '', 
  style = {} 
}) => {
  return (
    <div className={`card-actions ${className}`} style={style}>
      {actions.map((action, index) => (
        <button
          key={index}
          className={`card-action-button ${action.className || ''}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

CardActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      className: PropTypes.string,
      disabled: PropTypes.bool
    })
  ),
  className: PropTypes.string,
  style: PropTypes.object
};

export default CardActions;
