import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
    backgroundColor: '#efca08',
  };

  return (
    <div>
      <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
        <img src="CAUSES.png" alt="Causes" width="50%" height="50%" />
      </div>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle6.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Hun ger.png" alt="Hunger" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Africa.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/donations"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Donate 
            </Button>
          </Link>  
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...wideImageStyle, backgroundImage: 'url("Rectangle7.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Shelter refugees.png" alt="Shelter refugees" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Ukraine.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/donations"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Donate
            </Button>
           </Link> 
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle8.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Edu cate.png" alt="Educate" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '50px' }}>
            <img src="Africa.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/volunteers"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Volunteer
            </Button>
          </Link>  
          </div>
        </Grid>

        {/* Place the last three images below the first three */}
        <Grid item>
          <div style={{ ...wideImageStyle, backgroundImage: 'url("Rectangle12.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '30px' }}>
            <img src="Warm meal.png" alt="Warm meal" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Worldwide.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/donations"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Donate
            </Button>
          </Link>  
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle14.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Food supply.png" alt="Causes" width="70%" height="70%" />
          </div>
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="World wide.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/about"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Learn more
            </Button>
           </Link> 
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle16.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="She lter.png" alt="Causes" width="50%" height="50%" />
          </div>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="home less.png" alt="Causes" width="50%" height="50%" />
          </div>
          <Link to="/donations"> {/* Replace "/donate-warm-meal" with your desired link */}
            <Button variant="contained" style={buttonStyle}>
              Donate
            </Button>
           </Link> 
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Causes;
