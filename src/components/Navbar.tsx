import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <DashboardIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Analytics</Button>
        <Button color="inherit">Settings</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
