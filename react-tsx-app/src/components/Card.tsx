import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

interface CardProps {
  /**
   * Optional image URL for the card
   */
  imageUrl?: string;

  /**
   * Card title
   */
  title?: string;

  /**
   * Card description or content
   */
  description?: string;

  /**
   * Optional action buttons or custom content
   */
  actions?: React.ReactNode;

  /**
   * Additional CSS class for custom styling
   */
  className?: string;

  /**
   * Click event handler for the entire card
   */
  onClick?: () => void;
}

/**
 * Reusable Card Component
 * Supports flexible content with optional image, title, description, and actions
 */
const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  actions,
  className = '',
  onClick,
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
    >
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title || 'Card image'} />
        </div>
      )}
      
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        
        {actions && (
          <div className="card-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
