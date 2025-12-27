import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  onClick, 
  className 
}) => {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:shadow-xl 
        ${onClick ? 'cursor-pointer' : ''}
        ${className || ''}
      `}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
