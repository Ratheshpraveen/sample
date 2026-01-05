import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Avatar, 
  IconButton, 
  Menu, 
  MenuItem, 
  TextField, 
  Box 
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Add as AddIcon, 
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon 
} from '@mui/icons-material';

interface TopNavBarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ isDarkMode, toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Avatar 
          alt="Company Logo" 
          src="/path/to/logo.png" 
          sx={{ mr: 2 }} 
        />

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Analytics</Button>
        </Box>

        {/* Search Field */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{ 
            mr: 2, 
            backgroundColor: 'background.paper',
            borderRadius: 1 
          }}
          InputProps={{
            startAdornment: <SearchIcon />
          }}
        />

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          startIcon={<AddIcon />}
          sx={{ mr: 2 }}
        >
          New Project
        </Button>

        {/* Theme Toggle */}
        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {/* Avatar with Dropdown */}
        <Avatar 
          alt="User Avatar" 
          src="/path/to/avatar.jpg"
          onClick={handleAvatarClick}
          sx={{ cursor: 'pointer' }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAvatarClose}
        >
          <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
          <MenuItem onClick={handleAvatarClose}>Settings</MenuItem>
          <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
