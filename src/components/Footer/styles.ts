import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    colorText: {
      color: 'white',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
