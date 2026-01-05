import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination,
  IconButton,
  Tooltip
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

// Interface for table entry
export interface EntryItem {
  id: number;
  name: string;
  status: string;
  progress: number;
  lastUpdated: string;
}

// Mock data (replace with actual data source)
const mockEntries: EntryItem[] = [
  { 
    id: 1, 
    name: 'Project Alpha', 
    status: 'In Progress', 
    progress: 65, 
    lastUpdated: '2023-06-15' 
  },
  { 
    id: 2, 
    name: 'Project Beta', 
    status: 'Completed', 
    progress: 100, 
    lastUpdated: '2023-06-10' 
  },
  { 
    id: 3, 
    name: 'Project Gamma', 
    status: 'Pending', 
    progress: 30, 
    lastUpdated: '2023-06-05' 
  },
  // Add more mock entries as needed
];

const EntriesTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id: number) => {
    // Implement edit logic
    console.log(`Editing entry ${id}`);
  };

  const handleDelete = (id: number) => {
    // Implement delete logic
    console.log(`Deleting entry ${id}`);
  };

  // Slice entries based on pagination
  const paginatedEntries = mockEntries.slice(
    page * rowsPerPage, 
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="entries table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Progress</TableCell>
              <TableCell align="right">Last Updated</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEntries.map((entry) => (
              <TableRow key={entry.id} hover>
                <TableCell component="th" scope="row">
                  {entry.name}
                </TableCell>
                <TableCell align="right">{entry.status}</TableCell>
                <TableCell align="right">{entry.progress}%</TableCell>
                <TableCell align="right">{entry.lastUpdated}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton 
                      color="primary" 
                      onClick={() => handleEdit(entry.id)}
                    >
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton 
                      color="error" 
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mockEntries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EntriesTable;
