import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    photo: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50% , -50%)',
      display: 'block',
    },
    img: {
      width: '200px',
      height: '280px',
      objectFit: 'cover',
      filter: 'grayscale(100%) contrast(120%)',
      boxShadow: '10px 15px 25px 0 rgba(0,0,0,.2)',
      display: 'block',
      transition: 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
      marginTop: '-10px',
      '&:hover': {
        boxShadow: '1px 1px 10px 0 rgba(0,0,0,.1)',
        marginTop: 0,
      },
    },
    glowWrap: {
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      marginTop: '-10px',
      '&:hover': {
        marginTop: 0,
      },
    },
    glow: {
      display: 'block',
      position: 'absolute',
      width: '40%',
      height: '200%',
      background: 'rgba(255,255,255,.2)',
      top: 0,
      filter: 'blur(5px)',
      transform: 'rotate(45deg) translate(-450%, 0)',
      transition: 'all .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
      '&:hover': {
        transform: 'rotate(45deg) translate(450%, 0)',
        transition: 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
    title: {
      position: 'absolute',
      zIndex: 1,
      transform: 'translate(-25%, -65%)',
      fontFamily: '"Montserrat", sans-serif',
      margin: 0,
      lineHeight: 1.2,
    },
  };
});

export default useStyles;
