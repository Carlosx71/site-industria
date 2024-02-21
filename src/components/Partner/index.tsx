import React from 'react';

import { Avatar, Box, Paper, SxProps, Theme } from '@mui/material';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import raizen from 'assets/images/partners/raizen.png';
import atvos from 'assets/images/partners/atvos.jpeg';
import capuva from 'assets/images/partners/capuva.jpg';
import citrosuco from 'assets/images/partners/citrosuco.png';
import furlan from 'assets/images/partners/furlan.png';
import grupoFarias from 'assets/images/partners/grupoFarias.png';
import iplan from 'assets/images/partners/iplan.png';
import granelli from 'assets/images/partners/logotipo-granelli-vertical.png';
import salmeron from 'assets/images/partners/salmeron.png';
import saoManoel from 'assets/images/partners/saoManoel.jpg';
import usinaBandeirante from 'assets/images/partners/usinaBandeirante.png';

const Partners = () => {
  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cssPaper: SxProps<Theme> = {
    padding: '20px',
    margin: '10px',
    display: 'flex',
    height: '200px',
    justifyContent: 'center',
  };

  const cssLogos = { height: '130px' };

  const elevation = 7;

  return (
    <Box id="partners">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        swipeable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={raizen}
            sx={{
              width: { xs: '60%', lg: '72%' },
              height: { xs: '40%', sm: '50%', lg: '130px' },
              marginTop: { xs: '50px', lg: '20px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={atvos}
            sx={{ ...cssLogos, width: '100%', marginTop: '20px' }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={capuva}
            sx={{
              width: { xs: '60%', lg: '72%' },
              height: { xs: '40%', sm: '50%', lg: '130px' },
              marginTop: { xs: '50px', lg: '5px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={citrosuco}
            sx={{
              ...cssLogos,
              width: { xs: '55%', lg: '80%' },
              height: { xs: '23%', sm: '50%', lg: '50%' },
              marginTop: { xs: '60px', lg: '40px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo furlan"
            variant="square"
            src={furlan}
            sx={{
              width: { xs: '62%', lg: '45%' },
              height: { xs: '38%', sm: '50%', lg: '45%' },
              marginTop: { xs: '50px', lg: '40px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo grupo farias"
            variant="square"
            src={grupoFarias}
            sx={{
              width: { xs: '50%', lg: '50%' },
              height: { xs: '95px', sm: '50%', lg: '140px' },
              marginTop: { xs: '25px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo iplan"
            variant="square"
            src={iplan}
            sx={{
              width: { xs: '78%', lg: '80%' },
              height: { xs: '64%', sm: '50%', lg: '100%' },
              marginTop: { xs: '10px', lg: 0 },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo granelli"
            variant="square"
            src={granelli}
            sx={{
              width: { xs: '58%', lg: '55%' },
              height: { xs: '64%', sm: '50%', lg: '100%' },
              marginTop: { xs: '20px', lg: 0 },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo salmeron"
            variant="square"
            src={salmeron}
            sx={{
              ...cssLogos,
              width: '55%',
              height: '100%',
              marginTop: { xs: '5x', lg: '10px' },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo saoManoel"
            variant="square"
            src={saoManoel}
            sx={{
              width: { xs: '53.5%', lg: '65%' },
              height: { xs: '51%', sm: '50%', lg: '100%' },
              marginTop: { xs: '35px', lg: 0 },
            }}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo usinaBandeirante"
            variant="square"
            src={usinaBandeirante}
            sx={{
              width: { xs: '55%', lg: '45%' },
              height: { xs: '80%', sm: '50%', lg: '100%' },
              marginTop: { xs: '15px', lg: 0 },
              //  width: '45%', height: '100%'
            }}
          />
        </Paper>
      </Carousel>
    </Box>
  );
};

export default Partners;
