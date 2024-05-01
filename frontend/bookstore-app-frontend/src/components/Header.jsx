import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookstore App
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/search">Search</Button>
        <Button color="inherit" href="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
