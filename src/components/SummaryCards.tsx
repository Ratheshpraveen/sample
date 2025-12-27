import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';

const SummaryCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <Card>
    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </div>
      {icon}
    </CardContent>
  </Card>
);

const SummaryCards: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ marginBottom: 3 }}>
      <Grid item xs={12} sm={4}>
        <SummaryCard 
          title="Total Users" 
          value="1,234" 
          icon={<PeopleIcon fontSize="large" color="primary" />} 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SummaryCard 
          title="Revenue" 
          value="$45,678" 
          icon={<AttachMoneyIcon fontSize="large" color="success" />} 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SummaryCard 
          title="Performance" 
          value="92%" 
          icon={<BarChartIcon fontSize="large" color="secondary" />} 
        />
      </Grid>
    </Grid>
  );
};

export default SummaryCards;
