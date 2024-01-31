import React, { useEffect, useState } from 'react';
import {
  Fade,
  Grid,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import { contact } from 'interfaces/contact';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import validationSchema from './validationSchema';
import useStyles from './styles';
import { maskCellPhone } from 'utils/string/maks';

const FormEmail = () => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleBackDrop = () => {
    setOpen(!open);
  };

  const initialValues = {
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  };

  const handleEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    const response = await emailjs.sendForm(
      'service_t6d9uq4',
      'template_mc094y3',
      event.currentTarget,
      'igMwart4FmwOv4o0F'
    );
    formik.setValues(initialValues);
    formik.setTouched({});
    console.log(response);
    if (response.status === 200) {
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const formik = useFormik<contact>({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

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
    <form
      onSubmit={async (event) => {
        handleBackDrop();
        handleEmail(event);
        formik.handleSubmit(event);
      }}
      style={{ marginTop: '100px', marginBottom: '100px' }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Fade
            in={scrollPosition >= 600}
            {...(scrollPosition >= 600 ? { timeout: 800 } : {})}
          >
            <div className={classes.title} color="primary">
              Contato
            </div>
          </Fade>
          <br />
        </Grid>
        <Grid item xs={12}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="primary" />
          </Backdrop>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome"
            variant="outlined"
            fullWidth
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                id="telefone"
                name="telefone"
                label="Telefone"
                variant="outlined"
                fullWidth
                value={maskCellPhone(formik.values.telefone)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.telefone && Boolean(formik.errors.telefone)
                }
                helperText={formik.touched.telefone && formik.errors.telefone}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="assunto"
            name="assunto"
            label="Assunto"
            variant="outlined"
            fullWidth
            value={formik.values.assunto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.assunto && Boolean(formik.errors.assunto)}
            helperText={formik.touched.assunto && formik.errors.assunto}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mensagem"
            name="mensagem"
            label="Mensagem"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={formik.values.mensagem}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mensagem && Boolean(formik.errors.mensagem)}
            helperText={formik.touched.mensagem && formik.errors.mensagem}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormEmail;
