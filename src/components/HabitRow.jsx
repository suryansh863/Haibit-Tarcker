import React, { useState, useEffect } from 'react';
import { TableCell, TableRow, Button, Chip, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitRow = ({ habit, handleBreakStreak, handleDeleteHabit, handleOpenEdit }) => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = () => {
      const today = new Date();
      const startDate = new Date(habit.lastBreakDate || habit.startDate);
      const diffTime = Math.abs(today - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    };
    setStreak(calculateStreak());
  }, [habit.startDate, habit.lastBreakDate]);

  return (
    <TableRow>
      <TableCell>{habit.name}</TableCell>
      <TableCell>{streak}</TableCell>
      <TableCell>
        <Chip label={habit.type} color="primary" />
      </TableCell>
      <TableCell>{habit.lastBreakDate || 'N/A'}</TableCell>
      <TableCell>{habit.notes}</TableCell>
      <TableCell>{habit.startDate}</TableCell>
      <TableCell>
        <Chip label="Successful" color="success" />
      </TableCell>
      <TableCell>{habit.targetDuration}</TableCell>
      <TableCell>
        <Button variant="outlined" color="error" onClick={() => handleBreakStreak(habit.id)}>
          Break Streak
        </Button>
        <IconButton onClick={() => handleOpenEdit(habit)} aria-label="edit">
            <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDeleteHabit(habit.id)} aria-label="delete">
            <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default HabitRow;
