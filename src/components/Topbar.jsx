import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#efca08' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          <img src="Transparent.png" alt="Logo" className="logo" style={{ width: '7vw', height: '6vh' }} />
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, alignItems: 'center', marginLeft: '0' }}>
        <Link href="/home" color="inherit" variant="h5" style={{ margin: '0 10px', textDecoration: 'none' }}>
            <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
              Home
            </Typography>
          </Link>
          <Link href="/about" color="inherit" variant="h5" style={{ margin: '0 10px', textDecoration: 'none' }}>
            <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
              About
            </Typography>
          </Link>
          <Link href="/donations" color="inherit" variant="h5" style={{ margin: '0 10px', textDecoration: 'none' }}>
            <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
              Donations
            </Typography>
          </Link>
          <Link href="/volunteers" color="inherit" variant="h5" style={{ margin: '0 10px', textDecoration: 'none' }}>
            <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
              Volunteers
            </Typography>
          </Link>
          <Link href="/causes" color="inherit" variant="h5" style={{ margin: '0 10px', textDecoration: 'none' }}>
            <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
              Causes
            </Typography>
          </Link>
        </div>
        <Link href="/contact" color="inherit" variant="h5" style={{ marginLeft: 'auto', textDecoration: 'none' }}>
          <Typography variant="h5" component="h2" style={{ color: '#10002b' }}>
            Contact Us
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;



