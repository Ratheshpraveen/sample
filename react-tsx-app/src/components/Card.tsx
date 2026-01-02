import React from 'react';

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
  className = '' 
}) => {
  return (
    <div 
      className={`card bg-white shadow-md rounded-lg p-4 m-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg mb-4" 
        />
      )}
      <div className="card-content">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
