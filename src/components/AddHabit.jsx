import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const AddHabit = ({ open, handleClose, handleAddHabit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    const newHabit = {
      name,
      type,
      notes,
      startDate: new Date().toISOString().slice(0, 10),
      lastBreakDate: null,
      targetDuration: '6 months',
    };
    handleAddHabit(newHabit);
    handleClose();
    setName('');
    setType('');
    setNotes('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Habit</DialogTitle>
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
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddHabit;
