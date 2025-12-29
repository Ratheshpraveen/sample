import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  actions,
  children,
  className = '',
}) => {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt || title || 'Card Image'} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        
        {children && <div className="card-custom-content">{children}</div>}
        
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
