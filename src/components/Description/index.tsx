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
        // fontFamily:
        //   '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        // fontSize: '1rem',
        fontWeight: 400,
        wordBreak: 'break-word',
        //maxWidth: '900px',
        color: 'rgba(0, 0, 0, 0.6)',
        lineHeight: '1.43',
        textAlign: 'center',
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
