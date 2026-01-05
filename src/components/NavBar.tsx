import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Button, 
  Avatar, 
  Menu, 
  MenuItem, 
  IconButton, 
  Box 
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Add as AddIcon, 
  AccountCircle as AccountCircleIcon 
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 0, 
            marginRight: 2, 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          Dashboard
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
          <Button color="inherit" component={Link} to="/reports">Reports</Button>
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

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          startIcon={<AddIcon />} 
          sx={{ marginRight: 2 }}
        >
          New Project
        </Button>

        {/* Avatar Dropdown */}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
