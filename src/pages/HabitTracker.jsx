import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Button, 
  Grid, 
  Container,
  Box,
  Fab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HabitRow from '../components/HabitRow';
import AddHabit from '../components/AddHabit';
import EditHabit from '../components/EditHabit';
import Logo from '../components/Logo';
import InstallButton from '../components/InstallButton';
import { loadHabits, addHabit, updateHabit, deleteHabit, breakStreak } from '../services/habitStorage';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [addHabitOpen, setAddHabitOpen] = useState(false);
  const [editHabitOpen, setEditHabitOpen] = useState(false);
  const [habitToEdit, setHabitToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Load habits on component mount
  useEffect(() => {
    const loadInitialHabits = () => {
      try {
        const loadedHabits = loadHabits();
        setHabits(loadedHabits);
      } catch (error) {
        console.error('Error loading habits:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialHabits();
  }, []);

  const handleAddHabit = (newHabit) => {
    try {
      const updatedHabits = addHabit(newHabit);
      setHabits(updatedHabits);
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  const handleUpdateHabit = (updatedHabit) => {
    try {
      const updatedHabits = updateHabit(updatedHabit);
      setHabits(updatedHabits);
    } catch (error) {
      console.error('Error updating habit:', error);
    }
  };

  const handleDeleteHabit = (habitId) => {
    try {
      const updatedHabits = deleteHabit(habitId);
      setHabits(updatedHabits);
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  const handleBreakStreak = (habitId) => {
    try {
      const updatedHabits = breakStreak(habitId);
      setHabits(updatedHabits);
    } catch (error) {
      console.error('Error breaking streak:', error);
    }
  };

  const handleOpenEdit = (habit) => {
    setHabitToEdit(habit);
    setEditHabitOpen(true);
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600 }}>
            Loading your habits...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        py: 4,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        {/* Install Button */}
        <InstallButton />

        {/* Header with Logo */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Logo size={isMobile ? 64 : 80} variant="text" />
          </Box>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              color: '#ffffff',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            Bad Habits Tracker
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontWeight: 400,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Track your progress, build better habits
          </Typography>
        </Box>

        {/* Stats Summary */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Typography variant="h3" sx={{ color: '#6366f1', fontWeight: 800, mb: 1 }}>
                  {habits.length}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                  Active Habits
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <Typography variant="h3" sx={{ color: '#10b981', fontWeight: 800, mb: 1 }}>
                  {habits.filter(h => !h.lastBreakDate).length}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                  Clean Streaks
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Habits Grid */}
        <Grid container spacing={3}>
          {habits.map((habit) => (
            <Grid item xs={12} sm={6} lg={4} key={habit.id}>
              <HabitRow
                habit={habit}
                handleBreakStreak={handleBreakStreak}
                handleDeleteHabit={handleDeleteHabit}
                handleOpenEdit={handleOpenEdit}
              />
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {habits.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              bgcolor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Logo size={80} variant="icon" showText={false} />
            </Box>
            <Typography variant="h4" sx={{ color: '#1e293b', mb: 2, fontWeight: 700 }}>
              No habits yet
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', mb: 4, maxWidth: 400, mx: 'auto' }}>
              Start your journey by adding your first habit to track. Every great change begins with a single step.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => setAddHabitOpen(true)}
              sx={{
                bgcolor: '#6366f1',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#4f46e5',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Add Your First Habit
            </Button>
          </Box>
        )}

        {/* Add Habit FAB */}
        {habits.length > 0 && (
          <Fab
            color="primary"
            aria-label="add habit"
            onClick={() => setAddHabitOpen(true)}
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              bgcolor: '#6366f1',
              color: 'white',
              width: 56,
              height: 56,
              '&:hover': {
                bgcolor: '#4f46e5',
                transform: 'scale(1.1)',
              }
            }}
          >
            <AddIcon />
          </Fab>
        )}

        {/* Modals */}
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
      </Container>
    </Box>
  );
};

export default HabitTracker;
