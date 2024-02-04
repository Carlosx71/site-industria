import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    allVariants: { color: 'black' },
  },
  components: {
    MuiCardContent: {
      styleOverrides: { root: { border: '1px solid #333333' } },
    },
    MuiIconButton: { styleOverrides: { root: { color: '#333333' } } },
    MuiIcon: { styleOverrides: { colorPrimary: '#333333' } },
  },
  palette: {
    primary: { main: '#333333' },
    secondary: { main: '#666666' },
    mode: 'light',
  },
});

export default theme;
