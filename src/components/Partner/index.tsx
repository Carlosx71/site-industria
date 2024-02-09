import React from 'react';
import imgPartner from 'assets/images/partners/teste.png';

import { Avatar, Grid, Paper, Typography } from '@mui/material';

const Partners = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            textAlign="center"
            fontWeight="500"
            sx={{ lineHeight: '1.22222' }}
          >
            Parceiros
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={5} sx={{ padding: '20px' }}>
            <Avatar
              alt="logo parceiro"
              variant="square"
              src={imgPartner}
              sx={{
                width: '80%',
                height: '100%',
                // filter: 'grayscale(100%)',
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Avatar
          alt="parceiro"
          variant="square"
          src={partnerImg}
          sx={{ width: '100%', height: '100%' }}
        />
        <Avatar
          alt="parceiro"
          variant="square"
          src={partnerImg}
          sx={{ width: '100%', height: '100%' }}
        />
        <Avatar
          alt="parceiro"
          variant="square"
          src={partnerImg}
          sx={{ width: '100%', height: '100%' }}
        />
      </Carousel> */}
    </>
  );
};

export default Partners;
