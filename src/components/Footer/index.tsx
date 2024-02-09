import React from 'react';
import { Typography, Link, Grid, Stack, Box } from '@mui/material';
import { WhatsApp, Instagram, Email, Place } from '@mui/icons-material';
import useStyles from './styles';

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="white" align="center">
      Copyright ©
      <Link color="inherit" href="">
        Todos Direitos Reservados
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: '50px',
        backgroundColor: (theme) => {
          return theme.palette.primary.main;
        },
        justifyContent: 'center',
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            sx={{ justifyContent: { xs: 'center', lg: 'flex-end' } }}
            marginRight="10px"
          >
            <WhatsApp color="secondary" sx={{ marginRight: '5px' }} />
            <Typography variant="subtitle1" color="white">
              (99) 99999-9999
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Box display="flex">
            <Instagram color="secondary" sx={{ marginRight: '5px' }} />
            <Link href="" className={classes.link}>
              <Box
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  width: '173px',
                }}
              >
                inserir link do instagram
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: '5px' }}
      >
        <Grid item md={6} lg={6} xl={6}>
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Email color="secondary" />
            <Typography variant="subtitle1" color="white">
              contato@oliverservicos.com
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <Stack direction="row" spacing={1}>
            <Place color="secondary" />
            <Typography variant="subtitle1" color="white">
              Endereço
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack marginTop="30px">
        <Copyright />
      </Stack>
    </Box>
  );
};

export default Footer;
