import React, { useState, useEffect } from 'react';
import { Grow, Grid, Fade, Typography, Chip } from '@mui/material';
import { FamilyRestroom, Gavel, People, Article } from '@mui/icons-material';
import CardsOfExpertise from 'components/CardsOfExpertise';
import {
  TextToExpertiseFamily,
  TextToExpertiseSuccessions,
} from './TextToExpertise';

const AreasOfExpertise = () => {
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
    <div>
      <Fade
        in={scrollPosition >= 600}
        {...(scrollPosition >= 600 ? { timeout: 800 } : {})}
      >
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ fontSize: '28px', marginTop: '10px' }}
        >
          <Chip
            label="Áreas de Atuação"
            variant="outlined"
            sx={{ height: '40px', fontSize: '22px' }}
          />
        </Typography>
      </Fade>
      <br />

      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item>
          <Grow
            in={scrollPosition >= 650}
            {...(scrollPosition >= 650 ? { timeout: 1400 } : {})}
          >
            <div>
              <CardsOfExpertise
                icon={FamilyRestroom}
                cardActions
                title="Direito das Famílias"
                description="Ações que versam sobre alimentos, divórcio, guarda e outras que são inerentes ao âmbito familiar."
                textModal={<TextToExpertiseFamily />}
              />
            </div>
          </Grow>
        </Grid>
        <Grid item>
          <Grow
            in={scrollPosition >= 650}
            {...(scrollPosition >= 650 ? { timeout: 1400 } : {})}
          >
            <div>
              <CardsOfExpertise
                icon={Article}
                cardActions
                title="Direito das Sucessões"
                description="Inventário judicial e extra judicial, partilha, testamento e demais temas que estão atrelados ao ramo sucessório."
                textModal={<TextToExpertiseSuccessions />}
              />
            </div>
          </Grow>
        </Grid>
        <Grid item>
          <Grow
            in={scrollPosition >= 650}
            {...(scrollPosition >= 650 ? { timeout: 1400 } : {})}
          >
            <div>
              <CardsOfExpertise
                icon={Gavel}
                title="Consultivo e Contencioso Cível"
                description="Elaboração de contratos, propositura de ações cíveis e defesa contenciosa, entre outras do gênero."
              />
            </div>
          </Grow>
        </Grid>
        <Grid item>
          <Grow
            in={scrollPosition >= 650}
            {...(scrollPosition >= 650 ? { timeout: 1400 } : {})}
          >
            <div>
              <CardsOfExpertise
                icon={People}
                title="Direito do Consumidor"
                description="Visando resguardar os direitos fundamentais dos consumidores, atuamos de forma consultiva e contenciosa, ações de reparação material e moral, troca de mercadoria, defeitos na execução de serviço e produto e outras."
              />
            </div>
          </Grow>
        </Grid>
      </Grid>
      {/* </Grow> */}
    </div>
  );
};

export default AreasOfExpertise;
