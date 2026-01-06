import React, { ReactNode } from 'react';
import './Card.css';

// Define the prop types for the Card component
export interface CardProps {
  title?: string;
  content?: string | ReactNode;
  image?: string;
  actions?: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'compact';
  className?: string;
  onClick?: () => void;
  header?: ReactNode;
  footer?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  actions,
  variant = 'default',
  className = '',
  onClick,
  header,
  footer
}) => {
  const cardClasses = `card card-${variant} ${className}`.trim();

  return (
    <div className={cardClasses} onClick={onClick}>
      {header && <div className="card-header">{header}</div>}
      
      {image && (
        <div className="card-image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <div className="card-text">{content}</div>}
      </div>
      
      {actions && <div className="card-actions">{actions}</div>}
      
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
