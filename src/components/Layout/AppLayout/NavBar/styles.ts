import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    logo: { width: '13%' },
    logResponsive: { width: '40%' },
    menu: {
      '& .MuiPaper-root': {
        //backgroundColor: theme.palette.primary.main,
        backgroundColor: '#fff',
      },
    },
    link: {
      textDecoration: 'none',
    },
    linkText: {
      color: 'rgb(0, 51, 102)',
    },
  };
});

export default useStyles;
