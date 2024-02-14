import { Avatar, Grid, Paper, Stack, SxProps, Theme } from '@mui/material';
import {
  Engineering,
  ElectricBolt,
  Factory,
  Article,
  WorkOutline,
  Handyman,
} from '@mui/icons-material';
import Description from 'components/Description';
import React from 'react';

const paperCssRules: SxProps<Theme> = {
  height: '230px',
  width: '250px',
  padding: '20px',
};

const iconCssRules: SxProps<Theme> = {
  height: '50px',
  width: '50px',
};

const avatarCssRules: SxProps<Theme> = {
  height: '100px',
  width: '100px',
  bgcolor: (t) => 'rgb(0, 51, 102)',
};

const spaceItensPaper = 4;

const paperElevation = 4;

const Services = () => {
  return (
    <Grid container justifyContent="center" spacing={6}>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <Engineering sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <ElectricBolt sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <Factory sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <Article sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <WorkOutline sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper elevation={paperElevation} sx={paperCssRules}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={spaceItensPaper}>
                <Avatar sx={avatarCssRules}>
                  <Handyman sx={iconCssRules} />
                </Avatar>
                <Description>
                  Texto curto sobre o serviço prestado por essa área
                </Description>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Services;
