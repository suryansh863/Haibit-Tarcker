import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddHabit = ({ open, handleClose, handleAddHabit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [notes, setNotes] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = () => {
    if (!name.trim()) return;
    
    const newHabit = {
      name: name.trim(),
      type: type.trim() || 'General',
      notes: notes.trim(),
      startDate: startDate,
      lastBreakDate: null,
      targetDuration: '6 months',
    };
    handleAddHabit(newHabit);
    handleClose();
    setName('');
    setType('');
    setNotes('');
    setStartDate(new Date().toISOString().slice(0, 10));
  };

  const handleCancel = () => {
    handleClose();
    setName('');
    setType('');
    setNotes('');
    setStartDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleCancel}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: '#ffffff',
          borderRadius: fullScreen ? 0 : 3,
          border: '1px solid #e2e8f0',
          boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.15), 0px 10px 20px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <DialogTitle sx={{ 
        color: '#1e293b', 
        textAlign: 'center',
        pb: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <AddIcon sx={{ mr: 1, fontSize: '2rem', color: '#6366f1' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#1e293b' }}>
            Add New Habit
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 400 }}>
          Start tracking your progress towards breaking this habit
        </Typography>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            autoFocus
            label="Habit Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#f8fafc',
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#6366f1',
                },
              },
              '& .MuiInputBase-input': {
                color: '#1e293b',
                '&::placeholder': {
                  color: '#94a3b8',
                  opacity: 1,
                },
              },
            }}
            placeholder="e.g., Smoking, Alcohol, Sugar"
          />
          
          <TextField
            label="Habit Type (Optional)"
            type="text"
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#f8fafc',
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#6366f1',
                },
              },
              '& .MuiInputBase-input': {
                color: '#1e293b',
                '&::placeholder': {
                  color: '#94a3b8',
                  opacity: 1,
                },
              },
            }}
            placeholder="e.g., Addiction, Health, Lifestyle"
          />

          <TextField
            label="Start Date"
            type="date"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#f8fafc',
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#6366f1',
                },
              },
              '& .MuiInputBase-input': {
                color: '#1e293b',
                '&::-webkit-calendar-picker-indicator': {
                  filter: 'invert(0.5)',
                },
              },
            }}
            helperText="When did you start tracking this habit?"
            FormHelperTextProps={{
              sx: {
                color: '#64748b',
                fontSize: '0.75rem',
              }
            }}
          />
          
          <TextField
            label="Notes (Optional)"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#f8fafc',
                borderRadius: 2,
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#6366f1',
                },
              },
              '& .MuiInputBase-input': {
                color: '#1e293b',
                '&::placeholder': {
                  color: '#94a3b8',
                  opacity: 1,
                },
              },
            }}
            placeholder="Why are you quitting this habit? What's your motivation?"
          />
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button 
          onClick={handleCancel}
          sx={{
            color: '#64748b',
            '&:hover': {
              bgcolor: 'rgba(99, 102, 241, 0.04)',
            }
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          variant="contained"
          disabled={!name.trim() || !startDate}
          sx={{
            bgcolor: '#6366f1',
            color: 'white',
            '&:hover': {
              bgcolor: '#4f46e5',
            },
            '&:disabled': {
              bgcolor: '#e2e8f0',
              color: '#94a3b8',
            }
          }}
        >
          Add Habit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddHabit;
