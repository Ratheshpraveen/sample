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
  disabled = false,
  renderTitle,
  renderContent,
  customStyles = {},
  dataTestId
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

  const renderCardTitle = () => {
    if (renderTitle) return renderTitle(title);
    if (title) return <h3 className="card-title">{title}</h3>;
    return null;
  };

  const renderCardContent = () => {
    if (renderContent) return renderContent(content);
    if (content) return <p className="card-text">{content}</p>;
    return null;
  };

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
      style={customStyles}
      data-testid={dataTestId}
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
        {renderCardTitle()}
        {renderCardContent()}
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
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  image: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outlined", "elevated", "flat"]),
  imagePosition: PropTypes.oneOf(["top", "bottom"]),
  disabled: PropTypes.bool,
  renderTitle: PropTypes.func,
  renderContent: PropTypes.func,
  customStyles: PropTypes.object,
  dataTestId: PropTypes.string
};

Card.defaultProps = {
  title: "",
  content: "",
  image: "",
  onClick: null,
  className: "",
  variant: "default",
  imagePosition: "top",
  disabled: false,
  renderTitle: null,
  renderContent: null,
  customStyles: {},
  dataTestId: null
};

export default Card;
