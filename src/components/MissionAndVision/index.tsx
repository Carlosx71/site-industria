import { Grid, Typography } from '@mui/material';
import React from 'react';
import Description from 'components/Description';

const MissionAndVision = () => {
  const spacing = 4;
  return (
    <Grid container spacing={spacing} id="purpose">
      <Grid item xs={12} lg={6}>
        <Grid container direction="column" spacing={spacing}>
          <Grid item>
            <Typography
              variant="h3"
              color="rgb(0, 51, 102)"
              textAlign="center"
              fontWeight="500"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: '1.22222',
              }}
            >
              Visão
            </Typography>
          </Grid>
          <Grid item>
            <Description>
              Ser reconhecida como a principal referência no setor de serviços
              industriais, destacando-se pela nossa capacidade de inovação,
              excelência técnica e compromisso com a sustentabilidade. Buscamos
              constantemente expandir nossa presença nacional, desenvolvendo
              parcerias estratégicas e investindo em tecnologias de ponta, para
              superar continuamente as expectativas de nossos clientes e
              contribuir para o progresso da indústria.
            </Description>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={6}>
        <Grid container direction="column" spacing={spacing}>
          <Grid item>
            <Typography
              variant="h3"
              color="rgb(0, 51, 102)"
              textAlign="center"
              fontWeight="500"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: '1.22222',
              }}
            >
              Missão
            </Typography>
          </Grid>
          <Grid item>
            <Description>
              Oferecer soluções integradas e inovadoras em serviços industriais,
              com foco na excelência operacional e na satisfação total do
              cliente. Com comprometimento de garantir a segurança, a qualidade
              e a eficiência em todas as nossas operações, contribuindo assim
              para o sucesso e o crescimento sustentável de nossos clientes e
              parceiros.
            </Description>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default MissionAndVision;
