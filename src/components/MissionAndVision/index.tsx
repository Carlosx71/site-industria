import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Description from 'components/Description';

const MissionAndVision = () => {
  const paperElevation = 4;
  const spacing = 2;
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12} lg={6}>
        {/* <Paper elevation={paperElevation} sx={{ padding: '20px' }}> */}
        <Grid container direction="column" spacing={spacing}>
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              fontWeight="500"
              sx={{ lineHeight: '1.22222' }}
            >
              VISÃO
            </Typography>
          </Grid>
          <Grid item>
            <Description>
              Nossa missão na Oliver Instalações Industriais é fornecer soluções
              de instalações industriais de alta qualidade, seguras e eficientes
              para nossos clientes. Estamos comprometidos em oferecer serviços e
              produtos inovadores que atendam às necessidades e expectativas de
              cada cliente, garantindo a satisfação e o sucesso de seus
              projetos. Buscamos constantemente aprimorar nossos processos,
              investir em tecnologia e capacitar nossa equipe para garantir a
              excelência em tudo o que fazemos. Nosso objetivo é ser
              reconhecidos como líderes no mercado de instalações industriais,
              mantendo sempre o compromisso com a qualidade, segurança e
              sustentabilidade em todas as nossas atividades.
            </Description>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Grid>

      <Grid item xs={12} lg={6}>
        {/* <Paper elevation={paperElevation} sx={{ padding: '20px' }}> */}
        <Grid container direction="column" spacing={spacing}>
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              fontWeight="500"
              sx={{ lineHeight: '1.22222' }}
            >
              Missão
            </Typography>
          </Grid>
          <Grid item>
            <Description>
              A missão da Oliver Instalações Industriais é fornecer soluções de
              instalações industriais de alta qualidade e confiáveis para nossos
              clientes. Nossa equipe altamente qualificada e experiente se
              compromete a atender às necessidades específicas de cada projeto,
              garantindo a segurança, eficiência e satisfação do cliente.
              Buscamos constantemente a inovação e excelência em nossos
              serviços, contribuindo para o crescimento e sucesso de nossos
              clientes e parceiros.
            </Description>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default MissionAndVision;
