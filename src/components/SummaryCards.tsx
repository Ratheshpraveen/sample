import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import {
  PeopleAlt as PeopleIcon,
  Work as WorkIcon,
  AssessmentOutlined as AssessmentIcon,
  MonetizationOnOutlined as MoneyIcon
} from '@mui/icons-material';

// TypeScript interface for card data
interface SummaryCardData {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
}

const SummaryCards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Mock data - replace with actual data source
  const cardData: SummaryCardData[] = [
    {
      icon: <PeopleIcon color="primary" />,
      title: 'Total Users',
      value: '1,254',
      change: 15.5
    },
    {
      icon: <WorkIcon color="secondary" />,
      title: 'Active Projects',
      value: '42',
      change: 8.2
    },
    {
      icon: <AssessmentIcon color="success" />,
      title: 'Completed Tasks',
      value: '356',
      change: 22.3
    },
    {
      icon: <MoneyIcon color="error" />,
      title: 'Revenue',
      value: '$124,567',
      change: 12.7
    }
  ];

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {cardData.map((card, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          key={index}
        >
          <Card 
            variant="outlined"
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardContent>
              <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="space-between" 
                marginBottom={2}
              >
                {card.icon}
                <Typography 
                  variant="subtitle1" 
                  color="textSecondary"
                >
                  {card.title}
                </Typography>
              </Box>
              <Typography 
                variant="h5" 
                component="div" 
                fontWeight="bold"
              >
                {card.value}
              </Typography>
              <Typography 
                variant="body2" 
                color={card.change > 0 ? 'success.main' : 'error.main'}
              >
                {card.change > 0 ? '+' : ''}{card.change}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
