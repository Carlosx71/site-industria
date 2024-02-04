import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    title: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: '3.25rem',
      color: theme.palette.primary.main,
      lineHeight: '1.22222',
      textAlign: 'center',
    },
    description: {
      // fontFamily:
      //   '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '1rem',
      fontWeight: 400,
      wordBreak: 'break-word',
      //maxWidth: '900px',
      color: 'rgba(0, 0, 0, 0.6)',
      lineHeight: '1.43',
      textAlign: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  };
});

export default useStyles;
