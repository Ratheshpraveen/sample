import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders basic card with title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders card with image', () => {
    render(
      <Card 
        title="Image Card" 
        content="Card with image" 
        image="/test-image.jpg" 
      />
    );
    
    const image = screen.getByAltText('Image Card');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  test('renders different variants', () => {
    const { rerender } = render(<Card variant="default" title="Default Card" />);
    expect(screen.getByText('Default Card')).toHaveClass('default');

    rerender(<Card variant="compact" title="Compact Card" />);
    expect(screen.getByText('Compact Card')).toHaveClass('compact');

    rerender(<Card variant="elevated" title="Elevated Card" />);
    expect(screen.getByText('Elevated Card')).toHaveClass('elevated');
  });

  test('handles click events', () => {
    const mockClick = jest.fn();
    render(<Card title="Clickable Card" onClick={mockClick} />);
    
    const card = screen.getByText('Clickable Card');
    card.click();
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
