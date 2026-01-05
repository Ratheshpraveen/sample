import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  useTheme,
  useMediaQuery 
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

// Interfaces for type safety
interface AchievementStat {
  label: string;
  value: number;
  icon: React.ReactNode;
}

interface ChartData {
  name: string;
  value: number;
}

const achievementStats: AchievementStat[] = [
  { 
    label: 'Total Projects', 
    value: 24, 
    icon: <i className="material-icons">work</i> 
  },
  { 
    label: 'Completed Tasks', 
    value: 156, 
    icon: <i className="material-icons">check_circle</i> 
  },
  { 
    label: 'Team Efficiency', 
    value: 92, 
    icon: <i className="material-icons">group</i> 
  }
];

const chartData: ChartData[] = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 }
];

const HeroPanel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Achievement Stats */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {achievementStats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardContent sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <Box>
                      <Typography variant="h6">{stat.label}</Typography>
                      <Typography variant="h4">{stat.value}</Typography>
                    </Box>
                    {stat.icon}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Data Visualization */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
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
