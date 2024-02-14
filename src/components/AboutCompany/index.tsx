import React, { useEffect, useState } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { Animated } from 'react-animated-css';
import useStyles from './styles';
import profile from 'assets/images/imgHeader4.jpg';
import Description from 'components/Description';

const AboutCompany = () => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Box
      sx={{
        marginTop: '30px',
        '@media (min-width: 2000px)': {
          marginTop: '80px',
        },
      }}
      id="descriptionLawyer"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            color="rgb(0, 51, 102)"
            textAlign="center"
            fontWeight="700"
            sx={{ fontSize: '3.25rem', lineHeight: '1.22222' }}
          >
            QUEM SOMOS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Description>
            <p>
              Prestadora de serviços voltada para o setor industrial, contando
              com uma equipe experiente e consolidada. Nosso foco está na
              montagem e desmontagem de estruturas, tubulações e caldeirarias de
              projetos industriais.
            </p>
            <p>
              Acreditamos profundamente no estabelecimento de relacionamentos
              duradouros com nossos clientes. Buscamos sempre uma parceria
              sólida, oferecendo um atendimento rápido, direto e personalizado
              para cada empresa que atendemos. Essa abordagem nos permite ser
              privilegiados na obtenção de serviços de alta qualidade.
            </p>
            <p>
              Iniciamos nossa trajetória em 2018 e estamos comprometidos em
              superar as expectativas e impulsionar o sucesso dos
              empreendimentos industriais de nossos clientes. Na OLIVER, cada
              projeto é conduzido com confiança, orgulho e segurança, refletindo
              nosso compromisso inabalável com a excelência em
              tudo o que fazemos.
            </p>
          </Description>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCompany;
