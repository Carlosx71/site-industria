import {
  Avatar,
  Box,
  Fade,
  Grid,
  Grow,
  Paper,
  Stack,
  SxProps,
  Theme,
} from '@mui/material';
import {
  Engineering,
  PrecisionManufacturing,
  Construction,
  FilterAlt,
  LocalFireDepartment,
  Settings,
} from '@mui/icons-material';
import Description from 'components/Description';
import React, { useEffect, useState } from 'react';

const DescriptionService = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        fontWeight: 400,
        wordBreak: 'break-word',
        color: 'rgb(77, 77, 77)',
        lineHeight: '1.43',
        textAlign: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      {text}
    </Box>
  );
};

const Services = () => {
  const initialStateHover = {
    filter: false,
    metal: false,
    welding: false,
    boiler: false,
    labor: false,
    engineering: false,
  };

  const [isHoveredGroup, setIsHoveredGroup] = useState(initialStateHover);
  const [scrollPosition, setScrollPosition] = useState(0);

  const avatarCssRules: SxProps<Theme> = {
    height: '100px',
    width: '100px',
  };

  const iconCssRules: SxProps<Theme> = {
    height: '50px',
    width: '50px',
  };

  const paperCssRules: SxProps<Theme> = {
    height: '230px',
    width: '250px',
    padding: '20px',
    transition: 'height 0.5s ease-in-out ',
    '&:hover': {
      transition: 'height 0.5s ease-in-out ',
      height: '350px',
    },
  };

  const boxCssRules: SxProps<Theme> = {
    fontWeight: 400,
    wordBreak: 'break-word',
    color: 'rgb(77, 77, 77)',
    lineHeight: '1.43',
    textAlign: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  const spaceItensPaper = 4;

  const paperElevation = 4;

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={8}
        sx={{ marginBottom: '120px' }}
        id="services"
      >
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={paperCssRules}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, filter: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        variant="circular"
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.filter
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <FilterAlt
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.filter
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Filtros Rotativos Separação de Sólidos
                      </Description>
                      <Fade in={isHoveredGroup.filter} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService text="Fabricação, Manutenção, Venda e Compra." />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={paperCssRules}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, metal: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.metal
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <Settings
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.metal
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Estruturas Metálicas
                      </Description>
                      <Fade in={isHoveredGroup.metal} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService text="Montagem, Desmontagem e desenvolvimento de projetos" />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={paperCssRules}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, welding: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.welding
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <PrecisionManufacturing
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.welding
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Soldagem
                      </Description>
                      <Fade in={isHoveredGroup.welding} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService text="Descrição: TIG, MIG, Eletrodo, Oxigás." />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={{
                  ...paperCssRules,
                  height: isHoveredGroup.boiler ? '350px' : '230px',
                  transition: 'height 0.5s ease-in-out',
                }}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, boiler: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.boiler
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <LocalFireDepartment
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.boiler
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Caldeira
                      </Description>
                      <Fade in={isHoveredGroup.boiler} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService text="Recortes, Montagens, Soldages, a projetos" />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={paperCssRules}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, labor: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.labor
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <Construction
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.labor
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Mão de obra Especializada
                      </Description>
                      <Fade in={isHoveredGroup.labor} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService text="Serviço fornecido no modelo Homem/Hora" />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
        <Grid item md={4} lg={2}>
          <Grow
            in={scrollPosition >= 700}
            {...(scrollPosition >= 700 ? { timeout: 1400 } : {})}
          >
            <Box>
              <Paper
                elevation={paperElevation}
                sx={{
                  ...paperCssRules,
                  height: isHoveredGroup.engineering ? '350px' : '230px',
                  transition: 'height 0.5s ease-in-out',
                }}
                onMouseEnter={() =>
                  setIsHoveredGroup({ ...isHoveredGroup, engineering: true })
                }
                onMouseLeave={() => setIsHoveredGroup(initialStateHover)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Stack alignItems="center" spacing={spaceItensPaper}>
                      <Avatar
                        sx={{
                          ...avatarCssRules,
                          bgcolor: isHoveredGroup.engineering
                            ? 'white'
                            : 'rgb(0,51,102)',
                        }}
                      >
                        <Engineering
                          sx={{
                            ...iconCssRules,
                            color: isHoveredGroup.engineering
                              ? 'rgb(0,51,102)'
                              : 'white',
                          }}
                        />
                      </Avatar>
                      <Description
                        sx={{ textAlign: 'center', fontWeight: '700' }}
                      >
                        Projetos de Engenharia
                      </Description>
                      <Fade in={isHoveredGroup.engineering} timeout={500}>
                        <Box sx={boxCssRules}>
                          <DescriptionService
                            text="Desenvolvimento de projetos de caldeiraria, montagens
                    industriais e galpões"
                          />
                        </Box>
                      </Fade>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grow>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
