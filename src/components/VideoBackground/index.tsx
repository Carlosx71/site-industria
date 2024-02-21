import { Box } from '@mui/material';

import industria from 'assets/videos/industria.mp4';

const VideoBackground = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        '@media (min-width: 2000px)': {
          height: '97.4vh',
        },
      }}
    >
      <video
        style={{
          height: '100vh',
          width: '100%',
          transform: 'scale(1.1)',
          position: 'absolute',
          bottom: '50px',
        }}
        autoPlay
        loop
        muted
        src={industria}
      />

      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 51, 102,0.4)',
        }}
      />
    </Box>
  );
};

export default VideoBackground;
