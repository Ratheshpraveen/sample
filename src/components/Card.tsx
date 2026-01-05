import React from 'react';

// Define the prop types for the Card component
interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode[];
  onClick?: () => void;
  className?: string;
}

/**
 * Reusable Card Component
 * 
 * A flexible card component that can display various types of content
 * with optional image and action buttons.
 */
const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  imageAlt = 'Card image',
  actions = [],
  onClick,
  className = '',
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
        
        {actions.length > 0 && (
          <div className="card-actions">
            {actions.map((action, index) => (
              <React.Fragment key={index}>
                {action}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
