import { createTheme } from '@mui/material/styles';
      
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1', // Modern indigo
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b', // Warm amber
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Light gray-blue
      paper: '#ffffff',
    },
    surface: {
      main: '#ffffff',
      light: '#f8fafc',
      dark: '#e2e8f0',
    },
    error: {
      main: '#ef4444', // Modern red
      light: '#f87171',
      dark: '#dc2626',
    },
    success: {
      main: '#10b981', // Modern green
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b', // Warm amber
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#3b82f6', // Modern blue
      light: '#60a5fa',
      dark: '#2563eb',
    },
    text: {
      primary: '#1e293b', // Dark slate
      secondary: '#64748b', // Medium slate
      disabled: '#94a3b8', // Light slate
    },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: '#1e293b',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#1e293b',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#1e293b',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#1e293b',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#1e293b',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#1e293b',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#374151',
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#6b7280',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    caption: {
      color: '#6b7280',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
    '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    '0px 25px 50px rgba(0, 0, 0, 0.15), 0px 10px 20px rgba(0, 0, 0, 0.1)',
    '0px 35px 60px rgba(0, 0, 0, 0.2), 0px 15px 30px rgba(0, 0, 0, 0.15)',
    '0px 45px 70px rgba(0, 0, 0, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.2)',
    '0px 55px 80px rgba(0, 0, 0, 0.3), 0px 25px 50px rgba(0, 0, 0, 0.25)',
    '0px 65px 90px rgba(0, 0, 0, 0.35), 0px 30px 60px rgba(0, 0, 0, 0.3)',
    '0px 75px 100px rgba(0, 0, 0, 0.4), 0px 35px 70px rgba(0, 0, 0, 0.35)',
    '0px 85px 110px rgba(0, 0, 0, 0.45), 0px 40px 80px rgba(0, 0, 0, 0.4)',
    '0px 95px 120px rgba(0, 0, 0, 0.5), 0px 45px 90px rgba(0, 0, 0, 0.45)',
    '0px 105px 130px rgba(0, 0, 0, 0.55), 0px 50px 100px rgba(0, 0, 0, 0.5)',
    '0px 115px 140px rgba(0, 0, 0, 0.6), 0px 55px 110px rgba(0, 0, 0, 0.55)',
    '0px 125px 150px rgba(0, 0, 0, 0.65), 0px 60px 120px rgba(0, 0, 0, 0.6)',
    '0px 135px 160px rgba(0, 0, 0, 0.7), 0px 65px 130px rgba(0, 0, 0, 0.65)',
    '0px 145px 170px rgba(0, 0, 0, 0.75), 0px 70px 140px rgba(0, 0, 0, 0.7)',
    '0px 155px 180px rgba(0, 0, 0, 0.8), 0px 75px 150px rgba(0, 0, 0, 0.75)',
    '0px 165px 190px rgba(0, 0, 0, 0.85), 0px 80px 160px rgba(0, 0, 0, 0.8)',
    '0px 175px 200px rgba(0, 0, 0, 0.9), 0px 85px 170px rgba(0, 0, 0, 0.85)',
    '0px 185px 210px rgba(0, 0, 0, 0.95), 0px 90px 180px rgba(0, 0, 0, 0.9)',
    '0px 195px 220px rgba(0, 0, 0, 1), 0px 95px 190px rgba(0, 0, 0, 0.95)',
  ],
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e2e8f0',
          borderRadius: 20,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.06)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontWeight: 600,
          textTransform: 'none',
          fontSize: '0.875rem',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(99, 102, 241, 0.04)',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0px 8px 25px rgba(99, 102, 241, 0.3)',
          '&:hover': {
            boxShadow: '0px 12px 35px rgba(99, 102, 241, 0.4)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
          fontSize: '0.75rem',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.15), 0px 10px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: 24,
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#f8fafc',
            '&:hover': {
              backgroundColor: '#f1f5f9',
            },
            '&.Mui-focused': {
              backgroundColor: '#ffffff',
            },
            '& fieldset': {
              borderColor: '#e2e8f0',
              borderWidth: '1.5px',
            },
            '&:hover fieldset': {
              borderColor: '#cbd5e1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6366f1',
              borderWidth: '2px',
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
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#e2e8f0',
        },
        bar: {
          borderRadius: 6,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
      
export default theme;