import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
  title,
  content,
  image,
  onClick,
  className = ""
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event) => {
    if (!onClick) return;

    setIsActive(true);
    setTimeout(() => setIsActive(false), 300);
    
    onClick(event);
  };

  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      handleClick(event);
    }
  };

  return (
    <div 
      className={`card ${className} ${isHovered ? "card-hovered" : ""} ${isActive ? "card-active" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={isActive}
    >
      {image && (
        <div className="card-image">
          <img 
            src={image} 
            alt={title || "Card image"} 
            loading="lazy"
            className={`${isHovered ? "card-image-hovered" : ""} ${isActive ? "card-image-active" : ""}`}
          />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  title: "",
  content: "",
  image: "",
  onClick: null,
  className: ""
};

export default Card;
