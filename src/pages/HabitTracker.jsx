import React, { useState, useEffect } from 'react';
import {  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Paper,  Typography,  Button,  Chip,  IconButton,} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HabitRow from '../components/HabitRow';
import AddHabit from '../components/AddHabit';
import EditHabit from '../components/EditHabit';

const initialHabits = [
  {
    id: 1,
    name: 'Alcohol Consumption',
    type: 'Alcohol Consumption',
    notes: 'Avoiding all alcoholic beverages',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 2,
    name: 'Sugar Intake',
    type: 'Sugar',
    notes: 'Cutting out processed sugars',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 3,
    name: 'Smoking',
    type: 'Smoking',
    notes: 'Starting my journey to quit sir',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 4,
    name: 'Masturbation',
    type: 'Masturbation',
    notes: 'Working on self-control and focus',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
];

const HabitTracker = () => {
  const [habits, setHabits] = useState(initialHabits);
  const [addHabitOpen, setAddHabitOpen] = useState(false);
  const [editHabitOpen, setEditHabitOpen] = useState(false);
  const [habitToEdit, setHabitToEdit] = useState(null);

  const handleAddHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, id: habits.length + 1 }]);
  };

  const handleUpdateHabit = (updatedHabit) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    );
    setHabits(updatedHabits);
  };

  const handleDeleteHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
  };

  const handleBreakStreak = (habitId) => {
    const today = new Date().toISOString().slice(0, 10);
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId ? { ...habit, lastBreakDate: today } : habit
    );
    setHabits(updatedHabits);
  };

  const handleOpenEdit = (habit) => {
    setHabitToEdit(habit);
    setEditHabitOpen(true);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        Bad Habits Tracker
      </Typography>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
        <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => setAddHabitOpen(true)}
            style={{ marginBottom: '1rem' }}
        >
            Add Habit
        </Button>
      </div>
      <AddHabit open={addHabitOpen} handleClose={() => setAddHabitOpen(false)} handleAddHabit={handleAddHabit} />
      {habitToEdit && (
        <EditHabit
          open={editHabitOpen}
          handleClose={() => setEditHabitOpen(false)}
          handleUpdateHabit={handleUpdateHabit}
          handleDeleteHabit={handleDeleteHabit}
          habit={habitToEdit}
        />
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Habit Name</TableCell>
              <TableCell>Current Streak (Days)</TableCell>
              <TableCell>Habit Type</TableCell>
              <TableCell>Last Break Date</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Target Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {habits.map((habit) => (
              <HabitRow
                key={habit.id}
                habit={habit}
                handleBreakStreak={handleBreakStreak}
                handleDeleteHabit={handleDeleteHabit}
                handleOpenEdit={handleOpenEdit}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HabitTracker;
