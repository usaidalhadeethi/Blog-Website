import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121726',
        color: '#767d96',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Column 1 */}
        <Grid item xs={12} sm={3}>
        <Typography variant="h6" sx={{ marginBottom: '12px', color: 'white' }}>
            Discover:
        </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Articles
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Stories
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            various topics
          </Typography>    
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ marginBottom: '12px', color: 'white' }}>
            Useful Links
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
           Terms of Service
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            FAQs
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Support
          </Typography>
        </Grid>


        {/* Column 3 */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ marginBottom: '12px', color: 'white' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.facebook.com/people/Usaid-Alhadithy/pfbid0gusur59DiWZDTSrWeuMLfRiADdjjAbDA5TK5TvfTYbFkhKVDgJzfHSdgXPCmrZFZl/" target="_blank" color="inherit" sx={{ mr: 1, '&:hover':{color: 'blue'} }}>
              <FacebookIcon />
            </Link>
            <Link href="https://www.instagram.com/usaid_alhadithy/?img_index=1" target="_blank" color="inherit" sx={{ mr: 1, '&:hover':{color: '#c7109b'} }}>
              <InstagramIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/usaid-alhadithy-143b47259/" target="_blank" color="inherit" sx={{ '&:hover':{color: 'blue'} }}>
              <LinkedInIcon />
            </Link>
          </Box>
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ marginBottom: '12px', color: 'white' }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Email: info@usblog.com
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Phone: +90 234 5678
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '8px' }}>
            Address: 123 Main St, Denizli, Turkey
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography variant="body1" sx={{ mt: 5 }}>
        © 2024 UsBlog. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Designed with ❤️ by <span style={{fontStyle: 'italic', color: '#ff7c09'}}>Usaid Alhadeethi</span> 
      </Typography>
    </Box>
  );
};

export default Footer;
