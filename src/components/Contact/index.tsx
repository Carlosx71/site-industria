import { Grid } from '@mui/material';
import FormEmail from 'components/FormEmail';
import React from 'react';

const Contact = () => {
  return (
    <Grid container spacing={4} justifyContent="center" id="contact">
      <Grid item xs={12}>
        <iframe
          title="Endereço do escritório"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '10px' }}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBEavNN4lyWkNnsj3y3Tj0bG1AChZzw1pg&q=-22.681426606596027,-47.69263431271605"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormEmail />
      </Grid>
    </Grid>
  );
};

export default Contact;
