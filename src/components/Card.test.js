import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  const defaultProps = {
    title: 'Test Card',
    content: 'This is a test card content',
    variant: 'default'
  };

  test('renders card with title and content', () => {
    render(<Card {...defaultProps} />);
    
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test card content')).toBeInTheDocument();
  });

  test('renders different variants', () => {
    const { rerender } = render(<Card {...defaultProps} variant="default" />);
    expect(screen.getByTestId('card-container')).toHaveClass('default');

    rerender(<Card {...defaultProps} variant="compact" />);
    expect(screen.getByTestId('card-container')).toHaveClass('compact');

    rerender(<Card {...defaultProps} variant="elevated" />);
    expect(screen.getByTestId('card-container')).toHaveClass('elevated');
  });

  test('renders with optional image', () => {
    render(<Card 
      {...defaultProps} 
      image={{
        src: 'https://example.com/image.jpg', 
        alt: 'Test Image'
      }} 
    />);
    
    const image = screen.getByAlt('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('renders with actions', () => {
    const mockAction = jest.fn();
    render(<Card 
      {...defaultProps} 
      actions={[
        { label: 'Click Me', onClick: mockAction }
      ]} 
    />);
    
    const actionButton = screen.getByText('Click Me');
    expect(actionButton).toBeInTheDocument();
  });
});
