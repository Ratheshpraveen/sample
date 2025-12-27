# Card Component Project

## Overview
This project includes a flexible and reusable Card component built with React and Tailwind CSS.

## Features
- Supports optional image
- Customizable title and description
- Optional click handler
- Responsive design
- Hover effects
- Flexible styling

## Usage Example
\`\`\`tsx
<Card 
  title="Nature Landscape" 
  description="A beautiful landscape with mountains and trees"
  imageUrl="https://example.com/image.jpg"
  onClick={() => console.log('Card clicked')}
/>
\`\`\`

## Props
- \`title\`: Card title (required)
- \`description\`: Card description (required)
- \`imageUrl\`: Optional image URL
- \`onClick\`: Optional click handler
- \`className\`: Additional CSS classes
