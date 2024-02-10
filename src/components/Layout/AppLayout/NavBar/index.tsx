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
import logotipo from 'assets/images/logotipo.png';
import useStyles from './styles';

const pages = [
  { title: 'Sobre Nós', anchor: 'descriptionLawyer' },
  { title: 'Serviços', anchor: 'areasOfExpertise' },
  { title: 'Missão', anchor: 'descriptionOffice' },
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
          marginTop: '100px',
          right: 'auto',
          width: '80%',
          padding: '15px',
          bgcolor: '#fff',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Hidden mdUp>
              <Avatar
                alt="Oliver"
                src={logotipo}
                variant="square"
                sx={{ width: 160, display: 'flex', alignSelf: 'center' }}
              />
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
              </Hidden>
              <Hidden mdDown>
                <Box display="flex">
                  {pages.map(({ anchor, title }) => (
                    <Button
                      key={title}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        bgcolor: '#fff',
                        fontWeight: 'bold',
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
