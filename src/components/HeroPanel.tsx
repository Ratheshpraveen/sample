import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  LinearProgress, 
  Box 
} from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for demonstration
const achievementData = [
  { name: 'Projects', value: 65, total: 100 },
  { name: 'Tasks', value: 42, total: 100 },
  { name: 'Efficiency', value: 85, total: 100 }
];

const chartData = [
  { month: 'Jan', projects: 4 },
  { month: 'Feb', projects: 3 },
  { month: 'Mar', projects: 6 },
  { month: 'Apr', projects: 5 },
  { month: 'May', projects: 7 },
];

const HeroPanel: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {/* Summary Statistics */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Projects</Typography>
            <Typography variant="h4">24</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Completed Tasks</Typography>
            <Typography variant="h4">156</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Team Efficiency</Typography>
            <Typography variant="h4">85%</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Achievement Stats */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Achievement Progress</Typography>
            {achievementData.map((achievement) => (
              <Box key={achievement.name} sx={{ marginBottom: 2 }}>
                <Typography variant="body2">{achievement.name}</Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(achievement.value / achievement.total) * 100} 
                />
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      {/* Data Visualization */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Projects</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroPanel;
