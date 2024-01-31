import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    lineStyle: {
      color: 'black',
    },
    title: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: '3.25rem',
      color: theme.palette.primary.main,
      lineHeight: '1.22222',
      textAlign: 'center',
    },
  };
});

export default useStyles;
