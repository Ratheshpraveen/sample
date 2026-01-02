import React from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Box, 
  Container, 
  useMediaQuery,
  useTheme
} from '@mui/material';

import Navbar from '../components/Navbar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';
import theme from '../styles/theme';
import { createResponsiveStyles } from '../utils/responsive';

const Dashboard: React.FC = () => {
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down('sm'));
  const responsiveStyles = createResponsiveStyles(currentTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{
          ...responsiveStyles.container,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Container 
          maxWidth="xl" 
          sx={{ 
            flexGrow: 1, 
            mt: isMobile ? 2 : 4,
            mb: isMobile ? 2 : 4,
          }}
        >
          <HeroPanel />
          <SummaryCards />
          <EntriesTable />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
