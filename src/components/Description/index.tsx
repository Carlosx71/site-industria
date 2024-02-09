import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

interface DescriptionProps {
  children: string;
  sx?: SxProps<Theme>;
}

const Description = ({ children, sx }: DescriptionProps) => {
  return (
    <Box
      sx={{
        fontWeight: 400,
        wordBreak: 'break-word',
        color: 'rgba(0, 0, 0, 0.6)',
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
