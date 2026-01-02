## Card Component

### Overview
The `Card` component is a flexible, reusable React component that supports multiple variants and customization options.

### Props
- `title` (required): The main title of the card
- `description` (optional): Additional text description
- `image` (optional): URL of an image to display
- `onClick` (optional): Click handler function
- `variant` (optional): Card style variant ('default' | 'outlined' | 'elevated')
- `disabled` (optional): Disable interaction with the card

### Usage Examples

```tsx
import Card from './Card';

// Default Card
function DefaultCard() {
  return (
    <Card 
      title="Welcome" 
      description="This is a default card" 
    />
  );
}

// Card with Image and Click Handler
function InteractiveCard() {
  const handleClick = () => {
    console.log('Card clicked!');
  };

  return (
    <Card 
      title="Click Me" 
      description="I'm an interactive card"
      image="/path/to/image.jpg"
      onClick={handleClick}
      variant="elevated"
    />
  );
}

// Disabled Card
function DisabledCard() {
  return (
    <Card 
      title="Disabled Card" 
      description="I cannot be interacted with"
      disabled={true}
    />
  );
}
```

### Variants
1. **Default**: Standard card with light border
2. **Outlined**: Transparent background with border
3. **Elevated**: Increased shadow for depth

### Accessibility
- Supports keyboard navigation
- Includes ARIA attributes for screen readers
- Provides visual and interactive feedback
