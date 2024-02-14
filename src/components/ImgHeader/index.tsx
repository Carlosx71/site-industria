import React from 'react';
import { Button, Grid, Link } from '@mui/material';
import useStyles from './styles';
import { Animated } from 'react-animated-css';
import { WhatsApp } from '@mui/icons-material';
import { Box } from '@mui/system';

const ImgHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgHeader}>
      <div className={classes.layer} style={{ display: 'flex' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
        >
          <Grid item>
            {/* <Animated
              animationIn="fadeIn"
              animationOut="zoomOutDown"
              animationInDuration={3000}
              animationOutDuration={1000}
              isVisible
            >
              <div className={classes.internalCard}>Oliver</div>
            </Animated> */}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={
                <WhatsApp
                  style={{ color: 'rgb(0, 51, 102)', fontSize: '30px' }}
                />
              }
              sx={{ bgcolor: '#FFF', marginTop: '50px' }}
              size="large"
              component={Link}
              target="_blank"
              rel="noreferrer"
              //href="https://api.whatsapp.com/send?phone=5531997164619&text=Olá! Gostária de um orçamento!"
            >
              <Box
                sx={{
                  color: 'rgb(0, 51, 102)',
                }}
              >
                Entrar em contato
              </Box>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ImgHeader;
