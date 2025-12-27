import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import { 
  AttachMoney as MoneyIcon, 
  ShoppingCart as CartIcon, 
  People as PeopleIcon 
} from '@mui/icons-material';

// Sample data for summary cards
const summaryData = [
  { 
    icon: <MoneyIcon />, 
    title: 'Revenue', 
    value: '$24,000', 
    color: 'success.main' 
  },
  { 
    icon: <CartIcon />, 
    title: 'Orders', 
    value: '452', 
    color: 'primary.main' 
  },
  { 
    icon: <PeopleIcon />, 
    title: 'Customers', 
    value: '1,245', 
    color: 'info.main' 
  }
];

// Sample data for the table
const tableData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' }
];

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {/* Hero Panel */}
      <Grid item xs={12}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            backgroundColor: 'primary.main', 
            color: 'white' 
          }}
        >
          <Typography variant="h4">Welcome to Your Dashboard</Typography>
          <Typography variant="subtitle1">
            Here's an overview of your business performance
          </Typography>
        </Paper>
      </Grid>

      {/* Summary Cards */}
      {summaryData.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  {React.cloneElement(card.icon, { 
                    sx: { 
                      color: card.color, 
                      fontSize: 40 
                    } 
                  })}
                </Grid>
                <Grid item>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="h4">{card.value}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Data Table */}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
