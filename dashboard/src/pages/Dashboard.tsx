import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';
import theme from '../theme';

const Dashboard: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div 
        role="main" 
        aria-label="Dashboard" 
        data-testid="dashboard-container"
      >
        <TopNavBar />
        <Container maxWidth="xl">
          <main>
            <HeroPanel />
            <SummaryCards />
            <EntriesTable />
          </main>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
