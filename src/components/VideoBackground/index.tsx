import { Box } from '@mui/material';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoBackground = () => {
  const videoId = 'J-7My6CXWP4';
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: videoId, // use the same videoId for the playlist
      mute: 1,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

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
      <YouTube
        videoId={videoId}
        style={{
          height: '100vh',
          width: '100%',
          transform: 'scale(1.1)',
          position: 'absolute',
          bottom: '50px',
        }}
        opts={opts}
      />

      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 55, 86, 0.4)',
        }}
      />
    </Box>
  );
};

export default VideoBackground;
