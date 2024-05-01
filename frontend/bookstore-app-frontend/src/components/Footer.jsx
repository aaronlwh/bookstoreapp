import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © {new Date().getFullYear()} My Site
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="/privacy">Privacy</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
