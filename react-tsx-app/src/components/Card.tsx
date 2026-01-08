import React from 'react';
import './Card.css';

// Define types for Card component props
export type CardVariant = 'basic' | 'elevated' | 'outlined';
export type CardSize = 'small' | 'medium' | 'large';
export type CardTheme = 'default' | 'primary' | 'secondary';

export interface CardProps {
  title?: string;
  content?: React.ReactNode;
  image?: string;
  onClick?: () => void;
  className?: string;
  variant?: CardVariant;
  size?: CardSize;
  theme?: CardTheme;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  onClick,
  className = '',
  variant = 'basic',
  size = 'medium',
  theme = 'default',
  disabled = false,
}) => {
  // Combine variant, size, theme, and disabled classes
  const cardClasses = [
    'card',
    `card-variant-${variant}`,
    `card-size-${size}`,
    `card-theme-${theme}`,
    disabled ? 'card-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses} 
      onClick={!disabled ? onClick : undefined}
    >
      {image && (
        <div className="card-image-container">
          <img src={image} alt={title || 'Card image'} className="card-image" />
        </div>
      )}
      
      {title && <h3 className="card-title">{title}</h3>}
      
      {content && (
        <div className="card-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Card;
