import React from 'react';
import './Card.css'; // We'll create this CSS file for styling

// Define prop types for the Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'neutral';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'medium',
  color = 'neutral',
  ...rest
}) => {
  // Combine base card class with variant, size, and color classes
  const cardClasses = [
    'card',
    `card-variant-${variant}`,
    `card-size-${size}`,
    `card-color-${color}`,
    className
  ].join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;
