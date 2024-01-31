import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import theme from 'styles/theme/light';
import Layout from 'components/Layout';
import LineBar from 'components/LineBar';
import ImgHeader from 'components/ImgHeader';
import DescriptionLawyer from 'components/DescriptionLawyer';
import AreasOfExpertise from 'components/AreasOfExpertise';
import DescriptionOffice from 'components/DescriptionOffice';
import FormEmail from 'components/FormEmail';
import Footer from 'components/Footer';

const spacing = 2;
const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <ThemeProvider theme={theme}>
        <Layout />
        {/* <LineBar /> */}
        <Grid container>
          <Grid item xs={12} xl={12}>
            <ImgHeader />
          </Grid>
        </Grid>
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
