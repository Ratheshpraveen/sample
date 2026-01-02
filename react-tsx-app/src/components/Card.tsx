import React from 'react';

// Define the props interface for the Card component
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
  className 
}) => {
  return (
    <div 
      className={`card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className || ''}`}
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
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Card;
