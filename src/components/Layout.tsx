import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      backgroundColor: 'background.default', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Container maxWidth="xl" sx={{ 
        flexGrow: 1, 
        paddingTop: 4,
        paddingBottom: 4 
      }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
