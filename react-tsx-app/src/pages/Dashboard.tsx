import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography 
} from '@mui/material';

// Import previously created components
import NavBar from '../components/NavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Hero Panel */}
          <Grid item xs={12}>
            <HeroPanel />
          </Grid>

          {/* Summary Cards */}
          <Grid item xs={12}>
            <SummaryCards />
          </Grid>

          {/* Entries Table */}
          <Grid item xs={12}>
            <EntriesTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
