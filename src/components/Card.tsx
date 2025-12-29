import React from 'react';

// Define the props interface for type safety and flexibility
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  actionButtons?: React.ReactNode[];
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable Card Component
 * 
 * @param props - Card component properties
 * @returns A flexible and customizable card component
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  actionButtons,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {imageUrl && (
        <div className="card-image" style={{ marginBottom: '12px' }}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '4px' 
            }} 
          />
        </div>
      )}
      
      <div className="card-content">
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{title}</h3>
        <p style={{ margin: '0', color: '#666' }}>{description}</p>
        
        {actionButtons && actionButtons.length > 0 && (
          <div 
            className="card-actions" 
            style={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              marginTop: '12px', 
              gap: '8px' 
            }}
          >
            {actionButtons.map((button, index) => (
              <React.Fragment key={index}>{button}</React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
