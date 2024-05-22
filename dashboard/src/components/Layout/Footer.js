import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
        <Box sx={{
          my: 3,
          "& svg": {
            fontSize: "60px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: 'goldenrod',
            transform: 'translateX(5px)',
            transition: 'all 400ms',
          },
        }}>
          {/* Facebook and Call icons */}
          <a href="https://www.facebook.com/profile.php?id=100083557623121" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FacebookIcon />
          </a>
          <CallIcon />
        </Box>
        <Typography variant="h5" sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}>
          Per Os Resto 
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
