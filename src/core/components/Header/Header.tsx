import * as React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Stack,
  Typography,
} from '@mui/material';

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Sweet Kittens
      </Typography>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{ zIndex: 0 }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          ></IconButton>
          <Stack direction='row' gap='10px'>
            <img src='/assets/logo.png' width='50px' alt='logo.png' />
            <Typography
              variant='h6'
              component='div'
              fontWeight={700}
              fontSize={25}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Sweet Kittens
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export { Header };
