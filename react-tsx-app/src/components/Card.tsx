import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title, 
  description, 
  imageUrl, 
  onClick, 
  className = ''
}) => {
  return (
    <div 
      className={`card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
