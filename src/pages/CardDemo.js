import React from 'react';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardMedia from '../components/Card/CardMedia';
import CardActions from '../components/Card/CardActions';

import './CardDemo.css'; // We'll create this for additional styling

const CardDemo = () => {
  return (
    <div className="card-demo-container">
      <h1>Card Components Showcase</h1>

      {/* Basic Card */}
      <section className="card-demo-section">
        <h2>Basic Card</h2>
        <Card variant="basic">
          <CardHeader 
            title="Basic Card Example" 
            subtitle="Simple and clean design"
          />
          <p className="card-content">
            This is a basic card with minimal styling. It can be used for simple information display.
          </p>
          <CardActions>
            <button>Learn More</button>
          </CardActions>
        </Card>

      {/* Elevated Card */}
        <Card variant="elevated">
          <CardHeader 
            title="Elevated Card" 
            subtitle="With subtle shadow"
          />
          <p className="card-content">
            An elevated card that stands out with a gentle shadow effect.
          </p>
          <CardActions>
            <button>View Details</button>
          </CardActions>
        </Card>

      {/* Media Card */}
        <Card variant="media">
          <CardMedia 
            src="/path/to/sample-image.jpg" 
            alt="Sample Media"
          />
          <CardHeader 
            title="Media Card" 
            subtitle="Card with image content"
          />
          <CardActions>
            <button>Share</button>
            <button>Explore</button>
          </CardActions>
        </Card>

      {/* Outlined Card */}
        <Card variant="outlined">
          <CardHeader 
            title="Outlined Card" 
            subtitle="Distinct border style"
          />
          <p className="card-content">
            A card with a clear outline, providing visual separation.
          </p>
          <CardActions>
            <button>Action 1</button>
            <button>Action 2</button>
          </CardActions>
        </Card>
      </section>

      {/* Responsive Layout Demonstration */}
      <section className="card-demo-section responsive-demo">
        <h2>Responsive Card Layout</h2>
        <div className="card-grid">
          <Card variant="basic">
            <CardHeader title="Responsive Card 1" />
            <p className="card-content">Cards will adjust based on screen size.</p>
          </Card>
          <Card variant="elevated">
            <CardHeader title="Responsive Card 2" />
            <p className="card-content">Flexible grid layout.</p>
          </Card>
          <Card variant="outlined">
            <CardHeader title="Responsive Card 3" />
            <p className="card-content">Consistent spacing and sizing.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CardDemo;
