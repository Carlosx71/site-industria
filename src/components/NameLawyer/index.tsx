import React, { useEffect, useState } from 'react';
import { Divider, Fade, Typography } from '@mui/material';

const NameLawyer = () => {
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
    <Fade
      in={scrollPosition >= 180}
      {...(scrollPosition >= 180 ? { timeout: 800 } : {})}
    >
      <Divider style={{ width: '100%' }}>
        <div style={{ marginTop: '10px' }}>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            sx={{ fontSize: '28px' }}
          >
            <div
              style={{
                border: '2px rgba(0, 0, 0, 0.12) solid',
                borderRadius: '35px',
                padding: '10px',
              }}
            >
              Áreas de Atuação
            </div>
          </Typography>
        </div>
      </Divider>
    </Fade>
  );
};

export default NameLawyer;
