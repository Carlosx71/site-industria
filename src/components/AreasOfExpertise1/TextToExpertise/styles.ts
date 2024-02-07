import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    title: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: '1.75rem',
      color: theme.palette.primary.main,
      lineHeight: '1.22222',
    },
    subTitle: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
    paragraph: {
      fontSize: '0.875rem',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      color: 'rgba(0, 0, 0, 0.6)',
    },
  };
});

export default useStyles;
