import React from 'react';
import styled from 'styled-components';

// Define the props interface for the Card component
export interface CardProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
  actions?: React.ReactNode[];
  className?: string;
}

// Styled components with responsive design and interaction states
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff;
  overflow: hidden;
  margin: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 8px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const CardText = styled.div`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  gap: 8px;

  & > * {
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  imageUrl, 
  actions, 
  className 
}) => {
  return (
    <CardWrapper className={className}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </CardContent>
      {actions && actions.length > 0 && (
        <CardActions>
          {actions.map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </CardActions>
      )}
    </CardWrapper>
  );
};

export default Card;
