import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const About = () => {
  const imageStyle = {
    width: '25vw',
    height: '65vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '10px',
    position: 'relative',
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
          <div style={{ ...imageStyle, backgroundImage: 'url("green.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Pas sion (1).png" alt="Hunger" width="65%" height="65%" />
          </div>
          
            
          </div>
        </Grid>
        <Grid item>
          <div style={{...imageStyle,backgroundImage: 'url("mission puzzle1.png")' }}>
            
          
            
          </div>
        </Grid>
        <Grid item>
          <div style={{ ...imageStyle, backgroundImage: 'url("hands1.png")' }}>
            
          <div style={{ textAlign: 'topleft', marginBottom: '20px' }}>
            <img src="Vis ion (1).png" alt="Educate" width="50%" height="50%" />
          </div>
          
          
            
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
        <div style={{ ...imageStyle, backgroundImage: 'url("janedoe1.png")', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginBottom: '35px', marginLeft: '35px' }}>
    <Typography variant="h3">Jane Doe</Typography>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginTop: '20px', marginLeft: '75px', color: '#efca08' }}>
      <Typography variant="h4">CFO</Typography>
    </div>
  </div>
        </Grid>
        <Grid item>
        <div style={{ ...imageStyle, backgroundImage: 'url("janedoe2.png")', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginBottom: '35px', marginLeft: '35px' }}>
    <Typography variant="h3">Jane Doe</Typography>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginTop: '20px', marginLeft: '75px', color: '#efca08' }}>
      <Typography variant="h4">CTO</Typography>
    </div>
  </div>
            
          
        </Grid>
        <Grid item>
        <div style={{ ...imageStyle, backgroundImage: 'url("johndoe1.png")', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginBottom: '35px', marginLeft: '35px' }}>
    <Typography variant="h3">John Doe</Typography>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginTop: '20px', marginLeft: '35px', color: '#efca08' }}>
      <Typography variant="h4">Web developer</Typography>
    </div>
  
          
            
          </div>
        </Grid>
        <Grid item>
  <div style={{ ...imageStyle, backgroundImage: 'url("johndoe2.png")', position: 'relative' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginBottom: '35px', marginLeft: '35px' }}>
    <Typography variant="h3">John Doe</Typography>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, textAlign: 'left', marginTop: '20px', marginLeft: '35px', color: '#efca08' }}>
      <Typography variant="h4">Web designer</Typography>
    </div>
  </div>
</Grid>

        </Grid>
      
    </div>
    
  );
};

export default About;

