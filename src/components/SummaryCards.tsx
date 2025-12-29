import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Box, 
  CardActionArea 
} from '@mui/material';
import { 
  TrendingUp as TrendingUpIcon, 
  AttachMoney as MoneyIcon, 
  People as PeopleIcon, 
  ShoppingCart as CartIcon 
} from '@mui/icons-material';

// Define interface for summary card data
interface SummaryCardData {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

// Mock data for summary cards
const summaryCardsData: SummaryCardData[] = [
  {
    title: 'Total Revenue',
    value: '$24,500',
    change: 15.5,
    icon: <MoneyIcon />,
    color: 'primary.main'
  },
  {
    title: 'New Users',
    value: '1,342',
    change: 12.3,
    icon: <PeopleIcon />,
    color: 'success.main'
  },
  {
    title: 'Sales',
    value: '452',
    change: 8.7,
    icon: <CartIcon />,
    color: 'warning.main'
  },
  {
    title: 'Growth',
    value: '25.3%',
    change: 22.1,
    icon: <TrendingUpIcon />,
    color: 'info.main'
  }
];

const SummaryCard: React.FC<SummaryCardData> = ({ 
  title, 
  value, 
  change, 
  icon, 
  color 
}) => {
  const isPositive = change >= 0;

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 3
        }
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Box 
                sx={{ 
                  backgroundColor: color, 
                  color: 'white', 
                  borderRadius: '50%', 
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {icon}
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {value}
              </Typography>
              <Typography 
                variant="body2" 
                color={isPositive ? 'success.main' : 'error.main'}
              >
                {isPositive ? '+' : ''}{change}%
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const SummaryCards: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {summaryCardsData.map((cardData, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SummaryCard {...cardData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
