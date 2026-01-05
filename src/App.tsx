import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { 
  IconButton, 
  Box, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  // Use system preference as initial mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  // Memoize theme creation
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Toggle theme mode
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        position: 'fixed', 
        top: 16, 
        right: 16, 
        zIndex: 1000 
      }}>
        <IconButton 
          onClick={toggleColorMode} 
          color="inherit"
          aria-label="toggle dark mode"
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
