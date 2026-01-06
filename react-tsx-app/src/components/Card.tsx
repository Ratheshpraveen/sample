import React, { ReactNode } from 'react';
import './Card.css';

/**
 * Props interface for the Card component
 * Allows flexible configuration with optional properties
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional title for the card
   */
  title?: string;

  /**
   * Optional content text for the card
   */
  content?: string;

  /**
   * Optional image URL for the card
   */
  imageUrl?: string;

  /**
   * Optional custom CSS class for additional styling
   */
  className?: string;

  /**
   * Optional click handler for the card
   */
  onClick?: () => void;

  /**
   * Optional children to allow more flexible content rendering
   */
  children?: ReactNode;
}

/**
 * Flexible Card component with conditional rendering
 * Follows React best practices for functional components
 */
const Card = ({
  title = '',
  content,
  imageUrl,
  className = '',
  onClick,
  children,
  ...props
}: CardProps): JSX.Element => {
  // Combine base card class with any additional classes
  const combinedClassName = `card ${className}`.trim();

  // Determine if the card is interactive
  const isInteractive = !!onClick;

  return (
    <div 
      className={combinedClassName}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title.length > 0 ? title : 'Card image'}
          className='card-image' 
          loading='lazy'
        />
      )}
      <div className='card-content'>
        {title && <h3 className='card-title'>{title}</h3>}
        {content && <p className='card-text'>{content}</p>}
        {children}
      </div>
    </div>
  );
};

// Add display name for easier debugging
Card.displayName = 'Card';

export default Card;

