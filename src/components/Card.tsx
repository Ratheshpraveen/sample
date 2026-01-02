import React, { useState } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  variant?: 'default' | 'outlined' | 'elevated';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onClick,
  variant = 'default',
  disabled = false,
  loading = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled && !loading) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsActive(true);
    }
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const cardClasses = [
    styles.card,
    styles[variant],
    isHovered ? styles.hovered : '',
    isActive ? styles.active : '',
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {loading && <div className={styles.loadingOverlay}>Loading...</div>}
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
