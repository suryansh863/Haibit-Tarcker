import { createTheme } from '@mui/material/styles';
      
      const theme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121212',
            paper: 'rgba(30, 30, 30, 0.5)',
          },
          error: {
            main: '#f44336',
          },
          success: {
              main: '#4caf50',
          }
        },
        typography: {
          fontFamily: 'Montserrat, sans-serif',
          h4: {
            fontWeight: 700,
          },
        },
        components: {
          MuiTableCell: {
            styleOverrides: {
              root: {
                color: 'white',
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: 'white',
              },
            },
          },
        },
      });
      
      export default theme;