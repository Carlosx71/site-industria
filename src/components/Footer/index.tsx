import React from 'react';
import { Typography, Link, Grid, Stack } from '@mui/material';
import { WhatsApp, Instagram, Email } from '@mui/icons-material';
import useStyles from './styles';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ color: 'white' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.augustoteixeira.adv.br/">
        Todos Direitos Reservados
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: (theme) => {
          return theme.palette.primary.main;
        },
      }}
    >
      <Grid item>
        <Grid container justifyContent="center">
          <Grid item>
            <br />
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className={classes.colorText}
            >
              AUGUSTO TEIXEIRA
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
              >
                <div className={classes.colorText}>
                  Advocacia & Consultoria Jurídica
                </div>
              </Typography>
              <Copyright />
            </Stack>
          </Grid>
          <Grid item>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <WhatsApp color="secondary" />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                >
                  <div className={classes.colorText}>(31) 99716-4619</div>
                </Typography>
                <Instagram color="secondary" />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                  className={classes.colorText}
                >
                  <Link
                    href="https://www.instagram.com/adv.augustoteixeira/"
                    className={classes.link}
                  >
                    <div className={classes.colorText}>
                      @adv.augustoteixeira
                    </div>
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Email color="secondary" />
                <Typography
                  variant="subtitle1"
                  // align="center"
                  color="text.secondary"
                  component="p"
                >
                  <div className={classes.colorText}>
                    adv.augustoteixeira@gmail.com
                  </div>
                </Typography>
              </Stack>
            </Stack>
            <br />
          </Grid>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Footer;
