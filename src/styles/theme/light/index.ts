import { createTheme } from '@mui/material/styles';

const colorBase = '#003756';
const colorSecondary = '#666666';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    allVariants: { color: 'black' },
  },
  components: {
    MuiCardContent: {
      styleOverrides: { root: { border: `1px solid ${colorBase}` } },
    },
    MuiIconButton: { styleOverrides: { root: { color: colorBase } } },
    MuiIcon: { styleOverrides: { colorPrimary: colorBase } },
    MuiButton: {
      styleOverrides: {
        root: { color: colorSecondary, backgroundColor: colorBase },
      },
    },
  },
  palette: {
    primary: { main: colorBase },
    secondary: { main: colorSecondary },
    mode: 'light',
  },
});

export default theme;
