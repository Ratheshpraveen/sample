import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

interface Entry {
  id: number;
  name: string;
  status: string;
  progress: number;
  date: string;
}

const EntriesTable: React.FC = () => {
  const entries: Entry[] = [
    { id: 1, name: 'Project Alpha', status: 'In Progress', progress: 65, date: '2023-09-15' },
    { id: 2, name: 'Project Beta', status: 'Completed', progress: 100, date: '2023-09-10' },
    { id: 3, name: 'Project Gamma', status: 'Pending', progress: 30, date: '2023-09-20' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.status}</TableCell>
              <TableCell>{entry.progress}%</TableCell>
              <TableCell>{entry.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EntriesTable;
