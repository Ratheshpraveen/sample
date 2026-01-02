import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  imageUrl, 
  onClick 
}) => {
  return (
    <div 
      className="card" 
      onClick={onClick}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s',
        maxWidth: '300px'
      }}
      onMouseOver={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'scale(1.05)';
        }
      }}
      onMouseOut={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '12px'
          }} 
        />
      )}
      <h2 style={{ 
        margin: '0 0 10px 0', 
        fontSize: '1.25rem',
        color: '#333'
      }}>
        {title}
      </h2>
      <p style={{ 
        margin: '0', 
        color: '#666',
        fontSize: '1rem'
      }}>
        {content}
      </p>
    </div>
  );
};

export default Card;
