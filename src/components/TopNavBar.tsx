import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Button, 
  Avatar, 
  IconButton, 
  Box 
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon 
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

// Styled components for search input
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface TopNavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, marginRight: 2 }}>
          Dashboard
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Analytics</Button>
        </Box>

        {/* Search Field */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Dark Mode Toggle */}
        <IconButton 
          color="inherit" 
          onClick={toggleDarkMode}
          aria-label="toggle dark mode"
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ marginX: 2 }}
        >
          New Project
        </Button>

        {/* Avatar Dropdown */}
        <Avatar 
          alt="User Avatar" 
          src="/path/to/avatar.jpg" 
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
