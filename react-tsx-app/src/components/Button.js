import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  children, 
  className = '',
  ...rest 
}) => {
  // Combine dynamic classes based on props
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button;
