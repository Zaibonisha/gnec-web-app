import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#efca08' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
        <img src="Transparent.png" alt="Logo" className="logo" style={{ width: '13vw' }} />
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 35 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/about" color="inherit" variant="h6" style={{ margin: '0 10px', textDecoration: 'none' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                About
              </Typography>
            </Link>
            <Link href="/donations" color="inherit" variant="h6" style={{ margin: '0 10px', textDecoration: 'none' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                Donations
              </Typography>
            </Link>
            <Link href="/volunteers" color="inherit" variant="h6" style={{ margin: '0 10px', textDecoration: 'none' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                Volunteers
              </Typography>
            </Link>
            <Link href="/causes" color="inherit" variant="h6" style={{ margin: '0 10px', textDecoration: 'none' }}>
              <Typography variant="h6" style={{ color: 'black' }}>
                Causes
              </Typography>
            </Link>
          </div>
        </div>
        <Link href="/contact" color="inherit" variant="h6" style={{ marginLeft: 'auto', textDecoration: 'none' }}>
          <Typography variant="h6" style={{ color: 'black' }}>
            Contact Us
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

