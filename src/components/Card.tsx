import React from 'react';
import './Card.css';

// Define prop types for the Card component
export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  actions?: React.ReactNode;
  variant?: 'basic' | 'elevated' | 'compact' | 'with-image' | 'horizontal';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  actions,
  variant = 'basic',
  className = '',
}) => {
  return (
    <div className={`card card-${variant} ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
