# Card Component

## Overview
The `Card` component is a flexible and reusable React component designed to display content in a card-like format with multiple customization options.

## Props

### Basic Props
- `title` (string, required): The title of the card
- `content` (string, required): The main content of the card
- `variant` (string, optional): Card style variant. Options:
  - `default`: Standard card style
  - `compact`: Condensed card style
  - `elevated`: Card with shadow effect

### Optional Props
- `image` (object, optional): Image to display in the card
  - `src` (string): URL of the image
  - `alt` (string): Alternative text for the image
- `actions` (array, optional): Array of action buttons
  - `label` (string): Button text
  - `onClick` (function): Click handler for the button

## Usage Examples

### Basic Card
```jsx
<Card 
  title="Welcome" 
  content="This is a simple card" 
/>
```

### Card with Image
```jsx
<Card 
  title="Landscape" 
  content="Beautiful mountain scenery"
  image={{
    src: "/path/to/image.jpg",
    alt: "Mountain landscape"
  }}
/>
```

### Card with Actions
```jsx
<Card 
  title="Action Card" 
  content="Card with interactive buttons"
  actions={[
    { 
      label: "Learn More", 
      onClick: () => handleLearnMore() 
    },
    { 
      label: "Close", 
      onClick: () => handleClose() 
    }
  ]}
/>
```

## Variants
- Use the `variant` prop to change the card's appearance
- Supports `default`, `compact`, and `elevated` styles

## Customization
- Styles can be further customized by modifying the `Card.module.css`
- CSS variables in the stylesheet allow for easy theming
