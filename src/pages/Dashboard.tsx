import React from 'react';
import { 
  Container, 
  Grid, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import NavBar from '../components/NavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
      <NavBar />
      <Container 
        maxWidth="xl" 
        sx={{ 
          paddingTop: 2, 
          paddingBottom: 2,
          paddingLeft: isMobile ? 1 : 2,
          paddingRight: isMobile ? 1 : 2,
        }}
      >
        <Grid container spacing={isMobile ? 1 : 3}>
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
    </>
  );
};

export default Dashboard;
