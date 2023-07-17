import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const About = () => {
  return (
    <div>

      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} style={{ width: '50vw' }}>
          <Card style={{ marginBottom: 0, width: '50vw', height: '100vh' }}>
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
          <Card style={{ marginBottom: 0, width: '50vw', height: '100vh' }}>
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
    </div>
  );
};

export default About;

