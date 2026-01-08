import React from 'react';
import './Card.css';

// Define prop types with TypeScript
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  color?: 'neutral' | 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'medium', 
  color = 'neutral',
  className = '',
  children,
  ...rest
}) => {
  // Combine dynamic classes based on props
  const cardClasses = [
    'card',
    `card-variant-${variant}`,
    `card-size-${size}`,
    `card-color-${color}`,
    className
  ].join(' ').trim();

  return (
    <div 
      className={cardClasses} 
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
