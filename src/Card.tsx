import React from 'react';

// Define the Card component props interface
interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  onClick,
  className = '',
}) => {
  // Inline styles for basic responsive design
  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: '16px',
    padding: '16px',
    transition: 'transform 0.2s',
    cursor: onClick ? 'pointer' : 'default',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '12px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const contentStyle: React.CSSProperties = {
    color: '#666',
    lineHeight: '1.5',
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      style={{
        ...cardStyle,
        transform: onClick ? 'scale(1.02)' : 'scale(1)',
      }}
      className={`card ${className}`}
      onClick={handleClick}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={imageStyle}
        />
      )}
      <h3 style={titleStyle}>{title}</h3>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default Card;
