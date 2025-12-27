import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import HeroPanel from './components/HeroPanel';
import SummaryCards from './components/SummaryCards';
import DataTable from './components/DataTable';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ padding: 3 }}>
          <HeroPanel />
          <SummaryCards />
          <DataTable />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
