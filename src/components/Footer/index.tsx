import React from 'react';
import { Typography, Link, Grid, Stack, Box, Paper } from '@mui/material';
import { WhatsApp, Instagram, Email, LinkedIn } from '@mui/icons-material';
import useStyles from './styles';

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="rgb(0, 51, 102)">
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

  const cssIcon = {
    color: 'rgb(0, 51, 102)',
    marginRight: '10px',
  };

  return (
    <Paper elevation={7} sx={{ marginTop: '20px' }}>
      <Grid container padding="50px" spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1" component="p">
                    <div className={classes.colorText}>
                      Instalações industriais
                    </div>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1" component="p">
                    <div
                      className={classes.colorText}
                      style={{ minWidth: '323px' }}
                    >
                      <Copyright />
                    </div>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <WhatsApp sx={cssIcon} />
                  <Typography variant="subtitle1" component="p">
                    <div className={classes.colorText}>(99) 99999-9999</div>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Email sx={cssIcon} />
                  <Typography variant="subtitle1" component="p">
                    <div className={classes.colorText}>
                      contato@oliverservicos.com
                    </div>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={1} width="100%">
                <Box display="flex" alignItems="center">
                  <Instagram sx={cssIcon} />
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.colorText}
                  >
                    <Link
                      href="https://www.instagram.com/oliver.instalacoesindustriais/"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={classes.colorText}>
                        @oliver.instalacoesindustriais
                      </div>
                    </Link>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LinkedIn sx={cssIcon} />
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className={classes.colorText}
                  >
                    <Link
                      href="https://www.linkedin.com/company/oliver-instala%C3%A7%C3%B5es-industriais/about/"
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={classes.colorText}>
                        oliver-instalações-industriais
                      </div>
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
