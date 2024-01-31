import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Animated } from 'react-animated-css';
import useStyles from './styles';
import profile from 'assets/images/profile_adv_augusto_teixeira.png';

const DescriptionLawyer = () => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ marginTop: '30px' }} id="descriptionLawyer">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item lg={6}>
          <Animated
            animationIn="fadeInLeft"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={scrollPosition >= 300}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <div className={classes.title} color="primary">
                  Quem sou
                </div>
              </Grid>
              <Grid item>
                <Box className={classes.description}>
                  Formado em Direito pela Pontifícia Universidade Católica de
                  Minas Gerais (PUC Minas) e Pós-graduado em Direito de Família
                  Aplicado pelo IEC-PUC Minas, Vice Presidente da Comissão de
                  Direito de Família e Sucessões da OAB/Contagem no triênio
                  2022-2024. Minha atuação se pauta pela discrição e visa
                  atender os clientes de forma personalizada, propiciando amparo
                  jurídico qualificado. Advocacia exercida com zelo e
                  profissionalismo, sendo aplicado métodos que se adequam ao
                  caso concreto apresentado pelo cliente de forma artesanal,
                  atentando-se a cada detalhe e circunstâncias das demandas que
                  são colocadas em análise.
                </Box>
              </Grid>
            </Grid>
          </Animated>
        </Grid>
        <Grid item lg={6}>
          <Animated
            animationIn="fadeInRight"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={scrollPosition >= 300}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ maxWidth: '300px' }}>
              <img
                src={profile}
                alt="Augusto Teixeira Advogado"
                style={{
                  width: '100%',
                  borderRadius: '200px',
                  marginBottom: '10px',
                }}
              />
            </Box>
          </Animated>
        </Grid>
      </Grid>
    </div>
  );
};

export default DescriptionLawyer;
