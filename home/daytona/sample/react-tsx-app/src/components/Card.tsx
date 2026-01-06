import React from 'react';
import './Card.css';

/**
 * Props interface for the Card component
 * Allows flexible configuration with optional properties
 */
interface CardProps {
  /**
   * Optional title for the card
   */
  title?: string;

  /**
   * Optional content text for the card
   */
  content?: string;

  /**
   * Optional image URL for the card
   */
  imageUrl?: string;

  /**
   * Optional custom CSS class for additional styling
   */
  className?: string;

  /**
   * Optional click handler for the card
   */
  onClick?: () => void;
}

/**
 * Flexible Card component with conditional rendering
 */
const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
