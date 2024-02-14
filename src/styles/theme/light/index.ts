import { createTheme } from '@mui/material/styles';

const colorBase = '#27ABE2';
const colorSecondary = '#27ABE2';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    allVariants: { color: 'black' },
  },
  components: {
    MuiCardContent: {
      styleOverrides: { root: { border: `1px solid ${colorBase}` } },
    },
    MuiButtonBase: { styleOverrides: { root: { color: 'rgb(0, 51, 102)' } } },
    MuiIconButton: { styleOverrides: { root: { color: 'rgb(0, 51, 102)' } } },
    MuiIcon: { styleOverrides: { colorPrimary: 'rgb(0, 51, 102)' } },
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
