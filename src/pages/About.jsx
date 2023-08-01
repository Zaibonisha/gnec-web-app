import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';

const About = () => {
  const imageStyle = {
    width: '20vw',
    height: '65vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '10px',
    position: 'relative',
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

      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} style={{ width: '50vw'}}>
          <Card style={{ marginBottom: 0, width: '50vw', height: '100vh',backgroundColor: '#e8dab2' }}>
            <CardContent>
              <Typography variant="h1" component="h2">
              <img src="ABOUTheading.png" alt="About" width="100%" height="50%"/>
              </Typography>
              <Typography variant="h4" color="text.secondary">
              Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} style={{ marginLeft: '0' }}>
          <Card style={{ marginBottom: '30px', width: '50vw', height: '100vh' }}>
            <CardMedia
              component="img"
              alt="Picture"
              height="100%"
              width='100%'
              image="about.png"
            />
          </Card>
        </Grid>
      </Grid>

      <div style={{marginBottom: '10px'}}>
      <img src="OUR MVP.png" alt="About" width="70%" height="50%"/>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle6.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Hun ger.png" alt="Hunger" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Africa.png" alt="Causes" width="50%" height="50%" />
          </div>
            <Button variant="contained" style={buttonStyle}>
              Button 1
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{...imageStyle,backgroundImage: 'url("Rectangle7.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Shelter refugees.png" alt="Shelter refugees" width="90%" height="90%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Ukraine.png" alt="Causes" width="50%" height="50%" />
          </div>
            <Button variant="contained" style={buttonStyle}>
              Button 2
            </Button>
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
          
            <Button variant="contained" style={buttonStyle}>
              Button 3
            </Button>
          </div>
        </Grid>
        
        </Grid>
      
      </div>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '100px' }}>
          {/* Third Image */}
          <img
            src={`${process.env.PUBLIC_URL}/Line 1.png`}  // Replace 'third_image_url.png' with the actual URL of the third image
            alt="Third Image"
            style={{ width: '10vh', height: '80vh' }}
          />
          {/* Fourth Image */}
          <img
            src={`${process.env.PUBLIC_URL}/mousescrolldown.png`}  // Replace 'fourth_image_url.png' with the actual URL of the fourth image
            alt="Fourth Image"
            style={{ width: '10vw', height: 'auto', marginBottom: '10vw' }}
          />
          
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/meet-the-team.png`}  // Replace 'second_image_url.png' with the actual URL of the second image
          alt="Second Image"
          style={{ width: '75%', height: '80vh',  }}
         
        />
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
            <Button variant="contained" style={buttonStyle}>
              Button 1
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{...imageStyle,backgroundImage: 'url("Rectangle7.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Shelter refugees.png" alt="Shelter refugees" width="90%" height="90%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Ukraine.png" alt="Causes" width="50%" height="50%" />
          </div>
            <Button variant="contained" style={buttonStyle}>
              Button 2
            </Button>
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
          
            <Button variant="contained" style={buttonStyle}>
              Button 3
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("Rectangle6.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Hun ger.png" alt="Hunger" width="50%" height="50%" />
          </div>
          <div style={{ textAlign: 'topleft', marginTop: '20px' }}>
            <img src="Africa.png" alt="Causes" width="50%" height="50%" />
          </div>
            <Button variant="contained" style={buttonStyle}>
              Button 1
            </Button>
          </div>
        </Grid>
        </Grid>
      
    </div>
    
  );
};

export default About;

