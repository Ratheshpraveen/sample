import React from 'react';
import './Button.css';

// Define prop types for type safety
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  children,
  className = '',
}) => {
  // Combine dynamic classes based on props
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
