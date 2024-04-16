import { Avatar, Box, Grid, Paper, Stack, SxProps, Theme } from '@mui/material';
import { Engineering, FilterAlt } from '@mui/icons-material';
import Description from 'components/Description';
import React from 'react';

const Services = () => {
  const avatarCssRules: SxProps<Theme> = {
    height: '100px',
    width: '100px',
    bgcolor: 'rgb(0,51,102)',
  };

  const iconCssRules: SxProps<Theme> = {
    height: '50px',
    width: '50px',
  };

  const paperCssRules: SxProps<Theme> = {
    width: '100%',
    height: '100%',
    padding: '20px',
  };

  const paperElevation = 4;

  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: '120px' }} id="services">
        <Grid item xs={12} lg={6}>
          <Paper
            elevation={paperElevation}
            sx={{
              ...paperCssRules,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    sx={{
                      ...avatarCssRules,
                    }}
                  >
                    <Engineering
                      sx={{
                        ...iconCssRules,
                      }}
                    />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack
                  spacing={2}
                  sx={{
                    height: '100%',
                    marginTop: { xs: '20px', md: 0 },
                  }}
                >
                  <Description
                    sx={{
                      fontWeight: '700',
                      textAlign: { xs: 'center', md: 'start' },
                    }}
                  >
                    Projetos de Engenharia
                  </Description>
                  <Description>
                    <ul>
                      {[
                        'Caldeiraria',
                        'Usinagem',
                        'Soldagem (Eletrodo Revestido, TIG, MIG/MAG, Arame Tubular, Arco Submerso) Jateamento',
                        'Pintura Industrial',
                        'Montagem Industrial',
                        'Manutenção Industrial',
                        'Assistência Técnica',
                        'Testes em Campo',
                        'Treinamentos.',
                      ].map((item, index) => {
                        return (
                          <li key={index}>
                            <Box>{item.trim()}</Box>
                          </li>
                        );
                      })}
                    </ul>
                  </Description>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper
            elevation={paperElevation}
            sx={{
              ...paperCssRules,
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ height: '100%' }}
            >
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    sx={{
                      ...avatarCssRules,
                    }}
                  >
                    <FilterAlt
                      sx={{
                        ...iconCssRules,
                      }}
                    />
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ height: '100%' }}>
                <Stack
                  spacing={2}
                  sx={{ height: '100%', marginTop: { xs: '20px', md: 0 } }}
                >
                  <Description
                    sx={{
                      fontWeight: '700',
                      textAlign: { xs: 'center', md: 'start' },
                    }}
                  >
                    Filtros Rotativos
                  </Description>
                  <Description>
                    <ul>
                      {[
                        'Fabricação',
                        'Compra e Venda',
                        'Montagem e Desmontagem',
                        'Aferição',
                        'Regulagens',
                        'Testes em Campo',
                        'Recuperação de ART',
                        'Treinamentos',
                      ].map((item, index) => (
                        <li key={index} style={{ width: '275px' }}>
                          <Box>{item.trim()}</Box>
                        </li>
                      ))}
                    </ul>
                  </Description>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
