import React from 'react';
import imgPartner from 'assets/images/partners/teste.png';

import { Avatar, Paper, SxProps, Theme } from '@mui/material';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

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
    justifyContent: 'center',
  };

  const cssLogos = { width: '70%', height: '100%' };

  const elevation = 7;

  return (
    <>
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
            src={imgPartner}
            sx={cssLogos}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={imgPartner}
            sx={cssLogos}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={imgPartner}
            sx={cssLogos}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={imgPartner}
            sx={cssLogos}
          />
        </Paper>
        <Paper elevation={elevation} sx={cssPaper}>
          <Avatar
            alt="logo parceiro"
            variant="square"
            src={imgPartner}
            sx={cssLogos}
          />
        </Paper>
      </Carousel>
    </>
  );
};

export default Partners;
