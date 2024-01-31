import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    layout: {
      width: '100%',
      height: '5px',
      background:
        'linear-gradient(149deg, rgba(20,36,65,5) 0%, rgba(220,189,132,1) 100%)',
    },
  };
});

export default useStyles;
