import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Animated } from 'react-animated-css';
import useStyles from './styles';
import profile from 'assets/images/lady-justice.jpg';

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
    <div style={{ marginTop: '30px' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item lg={5}>
          <Animated
            animationIn="fadeInRight"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={scrollPosition >= 800}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src={profile}
                alt="Augusto Teixeira"
                style={{
                  width: '70%',
                  borderRadius: '5px',
                  marginBottom: '10px',
                }}
              />
            </div>
          </Animated>
        </Grid>
        <Grid item lg={5}>
          <Animated
            animationIn="fadeInLeft"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={scrollPosition >= 800}
          >
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <Grid
                container
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.title} color="primary">
                    Escritório
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.description}>
                    Augusto Teixeira Advocacia & Consultoria Jurídica não possui
                    uma sede física. Visando atender os clientes de forma
                    moderna e acessível, foi concebido sob a nova ótica dos
                    tempos modernos: um escritório digital! Isto mesmo. Por ser
                    um escritório moderno e se adequando as novas necessidades,
                    este novo conceito visa proporcionar praticidade e
                    comodidade aos clientes, facilitando o acesso e atendimento,
                    sem, no entanto, afetar a qualidade dos serviços jurídicos
                    prestados. Por ser um escritório digital, a atuação não se
                    limita apenas aos atendimentos virtuais, pois sempre que
                    necessário um atendimento presencial, este será realizado
                    normalmente, como tradicionalmente sempre foi. Se você
                    precisa de um advogado para defender seus interesses e
                    direitos, entre em contato pelos canais abaixo disponíveis e
                    agende um horário.
                  </div>
                </Grid>
              </Grid>
            </div>
          </Animated>
        </Grid>
      </Grid>
    </div>
  );
};

export default DescriptionLawyer;
