import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import theme from 'styles/theme/light';
import Layout from 'components/Layout';
import ImgHeader from 'components/ImgHeader';
import AboutCompany from 'components/AboutCompany';
import Footer from 'components/Footer';
import Services from 'components/Services';
import VideoBackground from 'components/VideoBackground';
import VideoCarousel from 'components/VideoCarousel';
import MissionAndVision from 'components/MissionAndVision';
import Partners from 'components/Partner';
import Contact from 'components/Contact';

const spacing = 5;
const App = () => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={dayjs.locale('pt-br')}
    >
      <ThemeProvider theme={theme}>
        <Layout />
        <Grid container spacing={spacing}>
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
          <Grid item xs={12} xl={12}>
            <Container maxWidth="xl">
              <VideoCarousel />
            </Container>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Container maxWidth="xl">
              <MissionAndVision />
            </Container>
          </Grid>
          <Grid item xs={12} marginTop={'20px'}>
            <Container maxWidth="xl">
              <Partners />
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="xl">
              <Contact />
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
