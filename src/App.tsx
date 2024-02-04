import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Grid } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import theme from 'styles/theme/light';
import Layout from 'components/Layout';
import LineBar from 'components/LineBar';
import ImgHeader from 'components/ImgHeader';
import AboutCompany from 'components/AboutCompany';
import AreasOfExpertise from 'components/AreasOfExpertise';
import DescriptionOffice from 'components/DescriptionOffice';
import FormEmail from 'components/FormEmail';
import Footer from 'components/Footer';
import YouTube, { YouTubeProps } from 'react-youtube';
import Services from 'components/Services';

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
          backgroundColor: 'rgba(102, 102, 102, 0.5)',
        }}
      />
    </Box>
  );
};
const spacing = 2;
const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <ThemeProvider theme={theme}>
        <Layout />
        {/* <LineBar /> */}
        <Grid container>
          <Grid item md={12} sx={{ display: { xs: 'none', lg: 'inline' } }}>
            <VideoBackground />
          </Grid>

          <Grid item xs={12} sx={{ display: { xs: 'inline', lg: 'none' } }}>
            <ImgHeader />
          </Grid>
          <Grid item xs={12} xl={12}>
            <Container maxWidth="xl">
              <AboutCompany />
            </Container>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Container
              maxWidth="xl"
              sx={{ marginTop: '80px', marginBottom: '100px' }}
            >
              <Services />
            </Container>
          </Grid>
        </Grid>
        {/* <Grid container>
          <Grid item xs={12} xl={12}>
            <ImgHeader />
          </Grid>
        </Grid> */}
        {/* 
        <Grid container direction="column" spacing={spacing}>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <DescriptionLawyer />
              </Grid>
            </Grid>
          </Grid>
          <Grid item id="areasOfExpertise">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <AreasOfExpertise />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item id="descriptionOffice">
                <DescriptionOffice />
              </Grid>
            </Grid>
          </Grid>
          <Grid item id="contato">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={10} md={5}>
                <FormEmail />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
