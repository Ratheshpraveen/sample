import React from 'react';
import Card from '../components/Card';

const CardDemo = () => {
  // Example of a card with an image and actions
  const imageCardProps = {
    title: 'Mountain Adventure',
    content: 'Explore breathtaking mountain landscapes and challenge yourself.',
    image: 'https://example.com/mountain.jpg',
    actions: [
      { 
        label: 'Learn More', 
        onClick: () => alert('Learn More clicked') 
      },
      { 
        label: 'Book Now', 
        onClick: () => alert('Book Now clicked') 
      }
    ],
    onClick: () => console.log('Card clicked')
  };

  // Example of a simple text card
  const textCardProps = {
    title: 'Upcoming Workshop',
    content: 'Join our web development workshop and level up your skills!',
    onClick: () => console.log('Workshop card clicked')
  };

  // Example of a card with no image
  const noImageCardProps = {
    title: 'Community Event',
    content: 'Monthly meetup for tech enthusiasts. Network and learn together.',
    actions: [
      { 
        label: 'Register', 
        onClick: () => alert('Event registration') 
      }
    ]
  };

  return (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      <Card {...imageCardProps} />
      <Card {...textCardProps} />
      <Card {...noImageCardProps} />
    </div>
  );
};

export default CardDemo;
