import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const HeroPanel: React.FC = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        padding: 3, 
        marginBottom: 3, 
        backgroundColor: 'primary.main', 
        color: 'white' 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Typography variant="subtitle1">
        Welcome to your comprehensive dashboard. Here you can view key metrics and insights.
      </Typography>
    </Paper>
  );
};

export default HeroPanel;
