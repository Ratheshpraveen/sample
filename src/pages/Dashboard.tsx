import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

const Dashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box>
      <TopNavBar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeroPanel />
          </Grid>
          <Grid item xs={12}>
            <SummaryCards />
          </Grid>
          <Grid item xs={12}>
            <EntriesTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
