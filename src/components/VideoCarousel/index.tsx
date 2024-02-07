import React from 'react';
import YouTube from 'react-youtube';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'react-multi-carousel/lib/styles.css';
import { useTheme } from '@mui/material';

const videos = [
  {
    label: 'Video 1',
    videoId: 'd-OoVwyyZXU',
  },
  {
    label: 'Video 2',
    videoId: 'J-7My6CXWP4',
  },
  {
    label: 'Video 3',
    videoId: 'd-OoVwyyZXU',
  },
  {
    label: 'Video 4',
    videoId: 'd-OoVwyyZXU',
  },
  {
    label: 'Video 5',
    videoId: 'd-OoVwyyZXU',
  },
];

const VideoCarousel = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const height = isDesktop
    ? '240'
    : isTablet
    ? '255'
    : isMobile
    ? '200'
    : '200';
  const width = isDesktop ? '350' : isTablet ? '230' : isMobile ? '250' : '250';

  const marginLeft = isDesktop
    ? '90px'
    : isTablet
    ? '90px'
    : isMobile
    ? '40px'
    : '40px';

  const opts = {
    height,
    width,
    playerVars: {
      autoplay: 0,
    },
  };

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

  return (
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
      {videos.map((video, index) => (
        <YouTube
          key={index}
          videoId={video.videoId}
          opts={opts}
          style={{ marginLeft }}
        />
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
