import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

interface DescriptionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Description = ({ children, sx }: DescriptionProps) => {
  return (
    <Box
      sx={{
        fontWeight: 400,
        wordBreak: 'break-word',
        color: 'rgb(77, 77, 77)',
        lineHeight: '1.43',
        textAlign: 'justify',
        paddingLeft: '10px',
        paddingRight: '10px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Description;
