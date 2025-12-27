import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
  title,
  content,
  image,
  onClick,
  className = "",
  variant = "default",
  imagePosition = "top",
  disabled = false
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event) => {
    if (disabled || !onClick) return;

    setIsActive(true);
    setTimeout(() => setIsActive(false), 300);
    
    onClick(event);
  };

  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === " ") && !disabled && onClick) {
      handleClick(event);
    }
  };

  const cardClasses = [
    "card",
    className,
    `card-variant-${variant}`,
    `card-image-position-${imagePosition}`,
    isHovered ? "card-hovered" : "",
    isActive ? "card-active" : "",
    disabled ? "card-disabled" : ""
  ].filter(Boolean).join(" ");

  const imageClasses = [
    "card-image",
    isHovered ? "card-image-hovered" : "",
    isActive ? "card-image-active" : ""
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      role={!disabled && onClick ? "button" : "article"}
      tabIndex={!disabled && onClick ? 0 : undefined}
      aria-pressed={isActive}
      aria-disabled={disabled}
    >
      {image && imagePosition === "top" && (
        <div className={imageClasses}>
          <img 
            src={image} 
            alt={title || "Card image"} 
            loading="lazy"
          />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
      </div>
      {image && imagePosition === "bottom" && (
        <div className={imageClasses}>
          <img 
            src={image} 
            alt={title || "Card image"} 
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outlined", "elevated", "flat"]),
  imagePosition: PropTypes.oneOf(["top", "bottom"]),
  disabled: PropTypes.bool
};

Card.defaultProps = {
  title: "",
  content: "",
  image: "",
  onClick: null,
  className: "",
  variant: "default",
  imagePosition: "top",
  disabled: false
};

export default Card;
