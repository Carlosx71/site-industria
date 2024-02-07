import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
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

const spacing = 2;
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
            <Container maxWidth="xl">d</Container>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Container maxWidth="xl">
              <MissionAndVision />
            </Container>
          </Grid>
          {/* PEDIR PARA FAZEREM UM CHAVE NO GOOGLE */}
          {/* <Grid item xs={12} xl={12}>
            <Container maxWidth="xl">
              <iframe
                title="Endereço do escritório"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBEavNN4lyWkNnsj3y3Tj0bG1AChZzw1pg&q=Space+Needle,Seattle+WA"
              ></iframe>
            </Container>
          </Grid> */}
          <Grid item xs={12}>
            <Footer />
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
