import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    lineStyle: {
      border: '2px solid #FFF',
      marginBottom: '10px',
      [theme.breakpoints.up('lg')]: {
        width: '600px',
      },
      [theme.breakpoints.down('lg')]: {
        width: '350px',
      },
    },
  };
});

export default useStyles;
