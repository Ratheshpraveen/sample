import React from 'react';
import { Container, Grid } from '@mui/material';
import CustomCard from './components/CustomCard';

function App() {
  const handleCardAction = () => {
    alert('Card action clicked!');
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            title="Sample Card 1" 
            description="This is a description for the first card."
            imageUrl="https://via.placeholder.com/350x140"
            onActionClick={handleCardAction}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            title="Sample Card 2" 
            description="Another card with a different description."
            imageUrl="https://via.placeholder.com/350x140"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard 
            title="Card Without Image" 
            description="A card that doesn't have an image."
            actionLabel="Click Me"
            onActionClick={handleCardAction}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
