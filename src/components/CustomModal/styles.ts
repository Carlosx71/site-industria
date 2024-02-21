import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    boxCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // bgcolor: 'background.paper',
      // background: 'primary.main',
      // boxShadow: 24,
      // p: 4,
    },
  };
});

export default useStyles;
