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
            color="primary"
            textAlign="center"
            fontWeight="700"
            sx={{ fontSize: '3.25rem', lineHeight: '1.22222' }}
          >
            Sobre nós
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Description>
            Somos a Oliveira, uma empresa especializada na produção e
            comercialização de celulose. Com mais de 20 anos de experiência no
            mercado, nos orgulhamos de oferecer produtos de alta qualidade e
            sustentáveis, atendendo às demandas de diversos setores, como papel,
            embalagens, têxtil e muitos outros. Nossa missão é fornecer celulose
            de forma responsável, respeitando o meio ambiente e promovendo
            práticas sustentáveis em todas as etapas do processo produtivo.
            Buscamos constantemente inovação e tecnologia de ponta para garantir
            a excelência em nossos produtos e serviços. Nosso compromisso com a
            qualidade e a satisfação dos clientes nos coloca como referência no
            mercado, sendo reconhecidos pela confiabilidade e eficiência em
            todas as nossas operações. Além disso, estamos em constante busca
            por melhorias e novas soluções para atender às necessidades de um
            mercado em constante evolução. Na Oliveira, valorizamos a
            transparência, a ética e o comprometimento com nossos colaboradores,
            clientes, fornecedores e comunidade. Estamos empenhados em
            contribuir para o desenvolvimento sustentável e para a construção de
            um futuro mais próspero e consciente. Junte-se a nós e conheça a
            excelência da celulose produzida com responsabilidade e compromisso.
            Na Oliveira, estamos prontos para atender suas demandas e superar
            suas expectativas.
          </Description>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCompany;
