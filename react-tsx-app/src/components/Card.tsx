import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        p-4 
        transition-all 
        duration-300 
        hover:shadow-lg 
        ${className}`}
      onClick={onClick}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {title}
        </h2>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
