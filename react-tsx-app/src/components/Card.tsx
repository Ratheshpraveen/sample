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
  className = ''
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
        hover:shadow-lg 
        cursor-pointer 
        w-64 
        ${className}
      `}
      onClick={onClick}
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
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
