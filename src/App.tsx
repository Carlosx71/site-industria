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
import DescriptionOffice from 'components/DescriptionOffice';
import FormEmail from 'components/FormEmail';
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
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
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
