import React, { CSSProperties, MouseEventHandler } from 'react';

// Extend the interface to include more flexible styling and interaction options
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onClick,
  className = '',
  style = {},
  children
}) => {
  // Base styles for the card
  const cardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: 'white',
    maxWidth: '400px',
    width: '100%',
    margin: '16px',
    overflow: 'hidden',
    cursor: onClick ? 'pointer' : 'default',
    ...style
  };

  // Hover effect styles
  const hoverStyle: CSSProperties = onClick ? {
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
    }
  } : {};

  // Image styles
  const imageStyle: CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  // Content styles
  const contentStyle: CSSProperties = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column'
  };

  // Title styles
  const titleStyle: CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  // Description styles
  const descriptionStyle: CSSProperties = {
    fontSize: '1rem',
    color: '#666'
  };

  return (
    <div 
      style={{...cardStyle, ...hoverStyle}} 
      onClick={onClick}
      className={`card ${className}`}
    >
      {image && (
        <img 
          src={image} 
          alt={title || 'Card image'} 
          style={imageStyle} 
        />
      )}
      <div style={contentStyle}>
        {title && <div style={titleStyle}>{title}</div>}
        {description && <div style={descriptionStyle}>{description}</div>}
        {children}
      </div>
    </div>
  );
};

// Prop validation can be enhanced with runtime checks if needed
Card.propTypes = {
  title: React.PropTypes?.string,
  description: React.PropTypes?.string,
  image: React.PropTypes?.string,
  onClick: React.PropTypes?.func,
  className: React.PropTypes?.string,
  style: React.PropTypes?.object,
  children: React.PropTypes?.node
};

export default Card;
