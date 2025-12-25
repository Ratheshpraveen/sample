import React, { useState } from 'react';
import { 
  DataGrid, 
  GridColDef, 
  GridToolbar, 
  GridSortModel,
  GridFilterModel 
} from '@mui/x-data-grid';
import { 
  Box, 
  Typography, 
  Paper 
} from '@mui/material';

// Mock data interface
interface EntryData {
  id: number;
  projectName: string;
  status: string;
  progress: number;
  deadline: string;
  assignedTo: string;
}

// Mock data for the table
const mockEntries: EntryData[] = [
  {
    id: 1,
    projectName: 'Dashboard Redesign',
    status: 'In Progress',
    progress: 65,
    deadline: '2023-12-15',
    assignedTo: 'John Doe'
  },
  {
    id: 2,
    projectName: 'Mobile App Development',
    status: 'Completed',
    progress: 100,
    deadline: '2023-11-30',
    assignedTo: 'Jane Smith'
  },
  {
    id: 3,
    projectName: 'Backend Optimization',
    status: 'Not Started',
    progress: 0,
    deadline: '2024-01-20',
    assignedTo: 'Mike Johnson'
  },
  {
    id: 4,
    projectName: 'UX Research',
    status: 'Pending',
    progress: 40,
    deadline: '2023-12-10',
    assignedTo: 'Sarah Williams'
  }
];

const EntriesTable: React.FC = () => {
  // State for sorting and filtering
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  // Define columns for the data grid
  const columns: GridColDef[] = [
    { 
      field: 'projectName', 
      headerName: 'Project Name', 
      width: 250,
      editable: false 
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 150,
      renderCell: (params) => {
        const getStatusColor = (status: string) => {
          switch(status) {
            case 'Completed': return 'green';
            case 'In Progress': return 'orange';
            case 'Not Started': return 'red';
            case 'Pending': return 'blue';
            default: return 'gray';
          }
        };

        return (
          <Box 
            sx={{ 
              color: getStatusColor(params.value),
              fontWeight: 'bold'
            }}
          >
            {params.value}
          </Box>
        );
      }
    },
    { 
      field: 'progress', 
      headerName: 'Progress', 
      width: 120,
      renderCell: (params) => (
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2">
            {params.value}%
          </Typography>
        </Box>
      )
    },
    { 
      field: 'deadline', 
      headerName: 'Deadline', 
      width: 150 
    },
    { 
      field: 'assignedTo', 
      headerName: 'Assigned To', 
      width: 200 
    }
  ];

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: 500, 
        width: '100%', 
        marginTop: 4 
      }}
    >
      <DataGrid
        rows={mockEntries}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#f0f0f0',
            fontWeight: 'bold'
          }
        }}
      />
    </Paper>
  );
};

export default EntriesTable;
