import React, { useState } from 'react';
import { 
  DataGrid, 
  GridColDef, 
  GridValueGetterParams,
  GridToolbar 
} from '@mui/x-data-grid';
import { 
  Box, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90,
    hide: true,
  },
  {
    field: 'projectName',
    headerName: 'Project Name',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => {
      const status = params.value as string;
      const color = status === 'Active' ? 'green' : 'red';
      return (
        <Box sx={{ color, fontWeight: 'bold' }}>
          {status}
        </Box>
      );
    },
  },
  {
    field: 'progress',
    headerName: 'Progress',
    type: 'number',
    width: 110,
    renderCell: (params) => `${params.value}%`,
  },
  {
    field: 'lastUpdated',
    headerName: 'Last Updated',
    type: 'date',
    width: 150,
  },
];

const rows = [
  { 
    id: 1, 
    projectName: 'Dashboard Redesign', 
    status: 'Active', 
    progress: 75,
    lastUpdated: new Date('2023-06-15'),
  },
  { 
    id: 2, 
    projectName: 'Mobile App', 
    status: 'Pending', 
    progress: 40,
    lastUpdated: new Date('2023-06-10'),
  },
  // Add more mock data as needed
];

const EntriesTable: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [pageSize, setPageSize] = useState(5);

  return (
    <Box sx={{ 
      height: isMobile ? 400 : 600, 
      width: '100%',
      '& .MuiDataGrid-root': {
        border: 'none',
      },
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        }}
      />
    </Box>
  );
};

export default EntriesTable;
