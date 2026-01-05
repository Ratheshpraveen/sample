import React from 'react';
import Card from '../components/Card';

const CardDemo = () => {
  // Example of a card with an image and actions
  const imageCardProps = {
    title: 'Mountain Adventure',
    content: 'Explore breathtaking mountain landscapes and challenge yourself with exciting trails.',
    image: 'https://example.com/mountain-image.jpg',
    actions: [
      { 
        label: 'Learn More', 
        onClick: () => alert('More details about the mountain adventure') 
      },
      { 
        label: 'Book Now', 
        onClick: () => alert('Booking mountain adventure') 
      }
    ]
  };

  // Example of a simple text card
  const textCardProps = {
    title: 'Upcoming Workshop',
    content: 'Join our interactive coding workshop and level up your programming skills.',
    actions: [
      { 
        label: 'Register', 
        onClick: () => alert('Registering for the workshop') 
      }
    ]
  };

  // Example of a card with custom styling
  const customStyledCardProps = {
    title: 'Special Offer',
    content: 'Limited time discount on our premium services!',
    className: 'special-offer-card',
    onClick: () => alert('Special offer clicked')
  };

  return (
    <div className="card-demo">
      <h1>Card Component Variations</h1>
      
      <div className="card-container">
        {/* Image Card with Actions */}
        <Card {...imageCardProps} />
        
        {/* Text Card */}
        <Card {...textCardProps} />
        
        {/* Custom Styled Card */}
        <Card {...customStyledCardProps} />
      </div>
    </div>
  );
};

export default CardDemo;
