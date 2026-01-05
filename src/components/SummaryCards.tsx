import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Icon 
} from '@mui/material';
import { 
  TrendingUp as TrendingUpIcon, 
  AttachMoney as MoneyIcon, 
  Assessment as AssessmentIcon 
} from '@mui/icons-material';

// Interface for SummaryCard props
interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  change?: number;
}

// Individual Summary Card Component
const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  icon, 
  color = 'primary', 
  change 
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      <CardContent>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
          >
            {title}
          </Typography>
          <Box 
            sx={{ 
              color: `${color}.main`, 
              fontSize: 40 
            }}
          >
            {icon}
          </Box>
        </Box>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ fontWeight: 'bold', mt: 1 }}
        >
          {value}
        </Typography>
        {change && (
          <Typography 
            variant="body2" 
            color={change > 0 ? 'success.main' : 'error.main'}
            sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
          >
            <TrendingUpIcon 
              sx={{ 
                mr: 0.5, 
                transform: change < 0 ? 'rotate(180deg)' : 'none' 
              }} 
            />
            {Math.abs(change)}% {change > 0 ? 'increase' : 'decrease'}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// SummaryCards Component
const SummaryCards: React.FC = () => {
  // Mock data - replace with actual data source
  const summaryData = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      icon: <MoneyIcon />,
      color: 'primary',
      change: 12.5
    },
    {
      title: 'New Projects',
      value: '42',
      icon: <AssessmentIcon />,
      color: 'secondary',
      change: 8.2
    },
    {
      title: 'Active Users',
      value: '1,240',
      icon: <AssessmentIcon />,
      color: 'success',
      change: 15.7
    }
  ];

  return (
    <Grid 
      container 
      spacing={3} 
      sx={{ mt: 2 }}
    >
      {summaryData.map((card, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          key={index}
        >
          <SummaryCard 
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color as any}
            change={card.change}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
