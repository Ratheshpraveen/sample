import React from 'react';

// Define the prop types for the Card component
export interface CardProps {
  title: string;
  description: string;
  image?: string;
  actions?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
}

/**
 * Reusable Card Component
 * Provides a flexible and accessible card design with multiple customization options
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  actions,
  variant = 'default',
  className = '',
}) => {
  // Generate variant-specific classes
  const variantClasses = {
    default: 'bg-white shadow-md',
    outlined: 'border border-gray-200 bg-white',
    elevated: 'shadow-lg bg-white',
  };

  return (
    <div 
      className={`
        rounded-lg 
        overflow-hidden 
        ${variantClasses[variant]} 
        ${className}
        transition-all 
        duration-300 
        hover:shadow-lg
      `}
      role="article"
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 
          className="text-xl font-semibold mb-2" 
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        
        <p 
          className="text-gray-600 mb-4" 
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        
        {actions && (
          <div className="flex justify-end space-x-2">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
