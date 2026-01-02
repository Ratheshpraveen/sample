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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const summaryData = [
  {
    title: 'Total Revenue',
    value: '$45,230',
    change: '+12.5%',
    positive: true,
    icon: <TrendingUpIcon color="success" />,
  },
  {
    title: 'New Users',
    value: '1,234',
    change: '-3.2%',
    positive: false,
    icon: <TrendingDownIcon color="error" />,
  },
  {
    title: 'Conversion Rate',
    value: '4.5%',
    change: '+2.1%',
    positive: true,
    icon: <TrendingUpIcon color="success" />,
  },
];

const SummaryCards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <Grid 
        container 
        spacing={isMobile ? 2 : 3}
        sx={{ 
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {summaryData.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
          >
            <Card 
              variant="outlined"
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                  <Typography variant="subtitle1" color="text.secondary">
                    {card.title}
                  </Typography>
                  {card.icon}
                </Box>
                <Typography variant="h4" component="div">
                  {card.value}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={card.positive ? 'success.main' : 'error.main'}
                >
                  {card.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SummaryCards;
