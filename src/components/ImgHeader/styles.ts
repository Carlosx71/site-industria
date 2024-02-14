import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import imgHeader from 'assets/images/imgHeader.jpg';

const useStyles = makeStyles((theme: Theme) => {
  return {
    imgHeader: {
      width: '100%',
      height: '100vh',
      background: `url(${imgHeader})`,
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    layer: {
      backgroundColor: 'rgba(0, 51, 102,0.4)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    internalCard: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: '100px',
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: '1.3em',
      color: '#FFF',
      textAlign: 'center',
    },
    subTitle: {
      fontFamily: '"Bebas Neue", cursive',
      fontSize: '57px',
      lineHeight: '1.3em',
      color: '#FFF',
      textAlign: 'center',
    },
    container: {
      position: 'relative',
    },
    textAnimeted: { position: 'absolute', top: '40%', left: '31%' },
    containerExplanatoryText: {
      '-webkit-text-stroke': '0.5px black',
      wordBreak: 'break-all',
    },
    bodyExplanatoryText: {
      mr: 2,
      flexGrow: 1,
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: '#dcbd84',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
