import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Chip, 
  IconButton, 
  Box,
  LinearProgress,
  useTheme,
  useMediaQuery
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HabitRow = ({ habit, handleBreakStreak, handleOpenEdit }) => {
  const [streak, setStreak] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const getProgressPercentage = () => {
    const targetDays = 180; // 6 months
    return Math.min((streak / targetDays) * 100, 100);
  };

  const getStreakColor = () => {
    if (streak >= 30) return '#10b981'; // Green for 30+ days
    if (streak >= 7) return '#f59e0b'; // Orange for 7+ days
    return '#ef4444'; // Red for less than 7 days
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#1e293b', 
                fontWeight: 700,
                mb: 1,
                lineHeight: 1.2
              }}
            >
              {habit.name}
            </Typography>
            <Chip 
              label={habit.type} 
              size="small"
              sx={{ 
                bgcolor: '#f1f5f9',
                color: '#475569',
                fontSize: '0.75rem',
                fontWeight: 500,
                border: '1px solid #e2e8f0'
              }} 
            />
          </Box>
          <IconButton 
            onClick={() => handleOpenEdit(habit)}
            sx={{ 
              color: '#64748b',
              '&:hover': { 
                color: '#6366f1',
                bgcolor: 'rgba(99, 102, 241, 0.1)'
              }
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>

        {/* Streak Display */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocalFireDepartmentIcon 
              sx={{ 
                color: getStreakColor(), 
                mr: 1.5,
                fontSize: '2rem'
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#1e293b', 
                fontWeight: 800,
                mr: 1
              }}
            >
              {streak}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#64748b',
                alignSelf: 'flex-end',
                mb: 0.5,
                fontWeight: 500
              }}
            >
              days
            </Typography>
          </Box>
          
          {/* Progress Bar */}
          <Box sx={{ mb: 1.5 }}>
            <LinearProgress
              variant="determinate"
              value={getProgressPercentage()}
              sx={{
                height: 10,
                borderRadius: 5,
                bgcolor: '#e2e8f0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: getStreakColor(),
                  borderRadius: 5,
                }
              }}
            />
          </Box>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#64748b',
              fontSize: '0.75rem',
              fontWeight: 500
            }}
          >
            {getProgressPercentage().toFixed(1)}% of 6-month goal
          </Typography>
        </Box>

        {/* Details */}
        <Box sx={{ mb: 3 }}>
          {habit.notes && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#475569',
                mb: 2,
                fontStyle: 'italic',
                lineHeight: 1.5
              }}
            >
              "{habit.notes}"
            </Typography>
          )}
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>
                Started:
              </Typography>
              <Typography variant="caption" sx={{ color: '#1e293b', fontWeight: 600 }}>
                {formatDate(habit.startDate)}
              </Typography>
            </Box>
            
            {habit.lastBreakDate && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 500 }}>
                  Last break:
                </Typography>
                <Typography variant="caption" sx={{ color: '#1e293b', fontWeight: 600 }}>
                  {formatDate(habit.lastBreakDate)}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleBreakStreak(habit.id)}
            sx={{
              flex: 1,
              color: '#ef4444',
              borderColor: '#ef4444',
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(239, 68, 68, 0.1)',
                borderColor: '#dc2626',
              }
            }}
          >
            Break Streak
          </Button>
          
          {streak > 0 && (
            <Button
              variant="contained"
              size="small"
              startIcon={<TrendingUpIcon />}
              sx={{
                bgcolor: getStreakColor(),
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: streak >= 30 ? '#059669' : streak >= 7 ? '#d97706' : '#dc2626',
                }
              }}
            >
              {streak}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default HabitRow;
