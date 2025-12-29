import React from 'react';
import { 
  Container, 
  Grid, 
  Box 
} from '@mui/material';
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

interface DashboardProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Box sx={{ 
      backgroundColor: 'background.default', 
      minHeight: '100vh',
      color: 'text.primary'
    }}>
      <TopNavBar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
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
