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
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logotipo from 'assets/images/logotipoLight.png';
import useStyles from './styles';

const pages = [
  { title: 'Quem Somos', anchor: 'aboutCompany' },
  { title: 'Serviços', anchor: 'services' },
  { title: 'Propósito', anchor: 'purpose' },
  { title: 'Parceiros', anchor: 'partners' },
  {
    title: 'Trabalhe conosco',
    anchor: undefined,
    link: 'http://oliverservicos.com/trabalheconosco',
  },
  { title: 'Contato', anchor: 'contact' },
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
        flexGrow: 1,
      }}
    >
      <AppBar
        position="absolute"
        sx={{
          borderRadius: '10px',
          marginTop: '100px',
          right: 'auto',
          width: '80%',
          padding: '15px 15px 15px 15px',
          bgcolor: '#fff',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Hidden mdUp>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <Avatar
                  alt="Oliver"
                  src={logotipo}
                  variant="square"
                  sx={{
                    width: { xs: '47%', sm: '30%', md: '35%', lg: 160 },

                    height: '100%',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon sx={{ color: 'rgb(0, 51, 102)' }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    elevation={8}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    className={classes.menu}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map(({ title, anchor, link }) => {
                      const target =
                        anchor !== undefined ? undefined : '_blank';
                      return (
                        <MenuItem
                          key={title}
                          onClick={handleCloseNavMenu}
                          href={`#${title}`}
                        >
                          <Typography textAlign="center">
                            <Link
                              href={anchor ? `#${anchor}` : link}
                              underline="none"
                              rel="noopener"
                              target={target}
                            >
                              <div className={classes.linkText}>{title}</div>
                            </Link>
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              </Stack>
            </Hidden>
            <Hidden mdDown>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <Avatar
                  alt="Oliver"
                  src={logotipo}
                  variant="square"
                  sx={{
                    width: 160,
                    height: '100%',
                    display: 'flex',
                    alignSelf: 'center',
                  }}
                />

                <Box display="flex">
                  {pages.map(({ anchor, title, link }) => {
                    return (
                      <Button
                        key={title}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          bgcolor: '#fff',
                          color: 'rgb(0, 51, 102)',
                          fontWeight: 'bold',
                        }}
                        href={anchor ? `#${anchor}` : link}
                      >
                        {title}
                      </Button>
                    );
                  })}
                </Box>
              </Stack>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
