import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Dashboard', 'Projects', 'Analytics', 'Settings'];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item}>
          <Button fullWidth>{item}</Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        color="default" 
        elevation={0}
        sx={{ 
          backgroundColor: 'background.default',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            flexWrap: 'wrap',
            px: { xs: 2, sm: 4 } 
          }}
        >
          {isMobile ? (
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            navItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))
          )}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            New Project
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
