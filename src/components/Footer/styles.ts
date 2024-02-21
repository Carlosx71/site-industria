import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    colorText: {
      color: 'rgb(0, 51, 102)',
    },
    link: {
      color: 'rgb(0, 51, 102)',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
