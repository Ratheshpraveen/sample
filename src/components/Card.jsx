import React from 'react';

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  actionText, 
  onActionClick, 
  className = '', 
  variant = 'default' 
}) => {
  const variantStyles = {
    default: 'bg-white shadow-md rounded-lg',
    outlined: 'border border-gray-200 rounded-lg',
    elevated: 'bg-white shadow-xl rounded-lg'
  };

  return (
    <div className={`${variantStyles[variant]} overflow-hidden w-full max-w-sm ${className}`}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        {actionText && (
          <button 
            onClick={onActionClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
