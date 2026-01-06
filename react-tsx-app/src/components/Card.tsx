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
      className={`bg-white shadow-md rounded-lg p-4 m-2 ${className}`}
      onClick={onClick}
      style={{ 
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out',
        ...(onClick && { 
          ':hover': { 
            transform: 'scale(1.02)' 
          } 
        })
      }}
    >
      {title && (
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;
