import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for achievements and charts
const achievementData = [
  { name: 'Projects', value: 24 },
  { name: 'Completed', value: 18 },
  { name: 'Pending', value: 6 }
];

const performanceData = [
  { month: 'Jan', performance: 65 },
  { month: 'Feb', performance: 59 },
  { month: 'Mar', performance: 80 },
  { month: 'Apr', performance: 81 },
  { month: 'May', performance: 56 },
  { month: 'Jun', performance: 55 }
];

interface HeroPanelProps {
  username?: string;
}

const HeroPanel: React.FC<HeroPanelProps> = ({ username = 'User' }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {username}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Achievement Stats */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Project Overview</Typography>
              {achievementData.map((item) => (
                <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
                  <Typography>{item.name}</Typography>
                  <Typography fontWeight="bold">{item.value}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Performance Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Performance Metrics</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="performance" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPanel;
