import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination 
} from '@mui/material';

// Define the structure of an entry
interface Entry {
  id: number;
  name: string;
  status: string;
  progress: number;
  lastUpdated: string;
}

// Mock data for the table
const mockEntries: Entry[] = [
  { id: 1, name: 'Project Alpha', status: 'In Progress', progress: 65, lastUpdated: '2023-06-15' },
  { id: 2, name: 'Project Beta', status: 'Completed', progress: 100, lastUpdated: '2023-06-10' },
  { id: 3, name: 'Project Gamma', status: 'Not Started', progress: 0, lastUpdated: '2023-06-05' },
  { id: 4, name: 'Project Delta', status: 'In Progress', progress: 45, lastUpdated: '2023-06-12' },
  { id: 5, name: 'Project Epsilon', status: 'On Hold', progress: 30, lastUpdated: '2023-06-08' },
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

  // Slice the entries based on pagination
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
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEntries.map((entry) => (
              <TableRow 
                key={entry.id} 
                hover 
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer'
                }}
              >
                <TableCell component="th" scope="row">
                  {entry.name}
                </TableCell>
                <TableCell align="right">{entry.status}</TableCell>
                <TableCell align="right">{entry.progress}%</TableCell>
                <TableCell align="right">{entry.lastUpdated}</TableCell>
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
