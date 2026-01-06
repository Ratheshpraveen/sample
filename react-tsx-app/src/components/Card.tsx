import React from 'react';
import './Card.css';

// Define interfaces for props
interface CardImage {
  src: string;
  alt: string;
}

interface CardAction {
  label: string;
  onClick: () => void;
}

interface CardProps {
  title: string;
  content: string;
  image?: CardImage;
  actions?: CardAction[];
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  image, 
  actions, 
  className = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      {/* Card Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>

      {/* Card Image (optional) */}
      {image && (
        <div className="card-image">
          <img src={image.src} alt={image.alt} />
        </div>
      )}

      {/* Card Content */}
      <div className="card-content">
        <p>{content}</p>
      </div>

      {/* Card Actions (optional) */}
      {actions && actions.length > 0 && (
        <div className="card-actions">
          {actions.map((action, index) => (
            <button 
              key={index} 
              onClick={action.onClick}
              className="card-action-button"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
