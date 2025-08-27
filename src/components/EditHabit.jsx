import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const EditHabit = ({ open, handleClose, handleUpdateHabit, habit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (habit) {
      setName(habit.name);
      setType(habit.type);
      setNotes(habit.notes);
    }
  }, [habit]);

  const handleSubmit = () => {
    const updatedHabit = {
      ...habit,
      name,
      type,
      notes,
    };
    handleUpdateHabit(updatedHabit);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Habit</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Habit Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Habit Type"
          type="text"
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Notes"
          type="text"
          fullWidth
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditHabit;
