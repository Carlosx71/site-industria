import {
  Avatar,
  Grid,
  Paper,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import {
  Engineering,
  ElectricBolt,
  Factory,
  Article,
  Assignment,
  WorkOutline,
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
  bgcolor: (t) => t.palette.primary.light,
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
    </Grid>
  );
};

// const Services = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: '#333333',
//         marginTop: '50px',
//         height: '100vh',
//         display: 'flex',
//       }}
//     >
//       <Container maxWidth="xl" sx={{ display: 'flex' }}>
//         <Grid container justifyContent="center" alignItems="center">
//           <Grid item xs={12}>
//             <Grid container justifyContent="space-between">
//               <Grid item xs={6}>
//                 <Grid container direction="column" alignItems="center">
//                   <Grid item xs={6}>
//                     <Paper
//                       sx={{
//                         borderRadius: '10px',
//                         height: '250px',
//                         width: '350px',
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         color="primary"
//                         fontWeight="500"
//                         sx={{
//                           marginLeft: '35px',
//                           paddingTop: '20px',
//                           lineHeight: '28px',
//                           fontSize: '24px',
//                         }}
//                       >
//                         Missão
//                       </Typography>
//                       <Description
//                         sx={{
//                           padding: '20px',
//                           fontSize: '15px',
//                           lineHeight: '22px',
//                         }}
//                       >
//                         Nossa visão é ser líder global em celulose, com foco em
//                         inovação, qualidade e sustentabilidade. Buscamos
//                         expandir nossas operações, atingir novos mercados e
//                         inspirar mudanças positivas, promovendo o
//                         desenvolvimento econômico e social das comunidades em
//                         que atuamos, sendo exemplo de responsabilidade
//                         ambiental.
//                       </Description>
//                     </Paper>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Paper
//                       sx={{
//                         marginTop: '10px',
//                         //height: '230px',
//                         width: '350px',
//                         borderRadius: '10px',
//                       }}
//                     >
//                       <Typography
//                         variant="h4"
//                         color="primary"
//                         fontWeight="500"
//                         sx={{
//                           marginLeft: '35px',
//                           paddingTop: '20px',
//                           lineHeight: '28px',
//                           fontSize: '24px',
//                         }}
//                       >
//                         Visão
//                       </Typography>
//                       <Description
//                         sx={{
//                           padding: '20px',
//                           fontSize: '15px',
//                           lineHeight: '22px',
//                         }}
//                       >
//                         Nossa visão é ser líder global em celulose,
//                         destacando-se em inovação, qualidade e sustentabilidade.
//                         Buscamos expandir nossas operações, atingir novos
//                         mercados e ampliar nossa atuação, com foco na excelência
//                         operacional e na satisfação dos clientes. Almejamos
//                         inspirar mudanças positivas, promovendo o
//                         desenvolvimento econômico e social das comunidades em
//                         que atuamos, sendo exemplo de responsabilidade
//                         ambiental.
//                       </Description>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid item xs={6}>
//                 TÔ AQUI
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

export default Services;
