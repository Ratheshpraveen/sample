# Card Component

## Overview
The `Card` component is a flexible and customizable UI element designed to display content in a consistent and visually appealing manner across the application.

## Props

| Prop Name | Type | Description | Default |
|-----------|------|-------------|---------|
| `title` | `string` | Title of the card | `undefined` |
| `description` | `string` | Description or body text | `undefined` |
| `image` | `string` | URL of the card image | `undefined` |
| `variant` | `'default' \| 'outlined' \| 'elevated'` | Visual style of the card | `'default'` |
| `onClick` | `() => void` | Click event handler | `undefined` |
| `className` | `string` | Additional CSS classes | `undefined` |
| `disabled` | `boolean` | Disables card interaction | `false` |

## Usage Examples

### Basic Card
```jsx
import Card from './Card';

function App() {
  return (
    <Card 
      title="Welcome" 
      description="This is a basic card component"
    />
  );
}
```

### Card with Image
```jsx
<Card 
  title="Nature Landscape" 
  description="Beautiful mountain scenery"
  image="/path/to/image.jpg"
/>
```

### Clickable Card
```jsx
<Card 
  title="Click Me" 
  description="This card has an onClick handler"
  onClick={() => console.log('Card clicked!')}
/>
```

### Card Variants
```jsx
<>
  <Card 
    title="Default Card" 
    variant="default"
  />
  <Card 
    title="Outlined Card" 
    variant="outlined"
  />
  <Card 
    title="Elevated Card" 
    variant="elevated"
  />
</>
```

### Disabled Card
```jsx
<Card 
  title="Disabled Card" 
  description="This card cannot be interacted with"
  disabled={true}
/>
```

## Best Practices
- Use meaningful titles and descriptions
- Ensure images are appropriately sized
- Consider accessibility when adding click handlers
- Use variants to maintain visual consistency

## Accessibility
- The component includes appropriate ARIA attributes
- Keyboard navigation is supported
- Hover and focus states are clearly defined
