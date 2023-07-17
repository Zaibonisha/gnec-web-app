import React from 'react';
import { Typography, Grid, Button } from '@mui/material';

const Causes = () => {
  const imageStyle = {
    width: '20vw',
    height: '65vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '10px',
    position: 'relative',
  };

  const wideImageStyle = {
    ...imageStyle,
    width: '40vw',
    height: '65vh' // Adjust the width as desired
  };

  
  const buttonStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'yellow',
  };

  return (
    <div>
      <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
        <img src="CAUSES.png" alt="Causes" width="50%" height="50%" />
      </div>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle6.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 1
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...wideImageStyle, backgroundImage: 'url("Rectangle7.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 2
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle8.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 3
            </Button>
          </div>
        </Grid>

        {/* Place the last three images below the first three */}
        <Grid item>
          <div style={{ ...wideImageStyle, backgroundImage: 'url("Rectangle12.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 4
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle14.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 5
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle16.png")' }}>
            
            <Typography variant="h3">Typography 1</Typography>
            <Typography variant="h4">Typography 2</Typography>
            <Button variant="contained" style={buttonStyle}>
              Button 6
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Causes;
