import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Hidden,
  Link,
  Stack,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logotipo from 'assets/images/logotipo.jpg';
import useStyles from './styles';

const pages = [
  { title: 'Quem Somos', anchor: 'descriptionLawyer' },
  { title: 'Áreas de Atuação', anchor: 'areasOfExpertise' },
  { title: 'Escritório', anchor: 'descriptionOffice' },
  { title: 'Contato', anchor: 'contato' },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AppBar
        position="absolute"
        sx={{
          borderRadius: '10px',
          //margin: '0 100px',
          marginTop: '100px',
          right: 'auto',
          // marginRight: '100px',
          width: '80%',
          // padding: '0 100px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Hidden mdUp>
              <Box sx={{ mr: 1 }}>
                <img
                  src={logotipo}
                  className={classes.logResponsive}
                  alt="logo Oliveira"
                />
              </Box>
            </Hidden>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon color="secondary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                className={classes.menu}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({ title, anchor }) => (
                  <MenuItem
                    key={title}
                    onClick={handleCloseNavMenu}
                    href={`#${title}`}
                  >
                    <Typography textAlign="center">
                      <Link href={`#${anchor}`} className={classes.link}>
                        <div className={classes.linkText}>{title}</div>
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: '100%' }}
            >
              <Hidden mdDown>
                <Box sx={{ my: 2 }}>Oliveira Logo</Box>
                {/* <img src={logotipo} className={classes.logo} alt="logo Oliveira" /> */}
              </Hidden>
              <Hidden mdDown>
                <Box display="flex">
                  {pages.map(({ anchor, title }) => (
                    <Button
                      key={title}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'white',
                        // display: 'block'
                      }}
                      href={`#${anchor}`}
                    >
                      {title}
                    </Button>
                  ))}
                </Box>
              </Hidden>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
