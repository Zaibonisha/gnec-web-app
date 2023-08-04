import React, {useState, useEffect} from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import './styles.css'

const Donation = () => {

    const [currentImage, setCurrentImage] = useState(0);

    
    const images = ['hands.png', 'variant2.png', 'variant3.png', 'variant2.png']; // Add your image URLs here
    const backgroundImageStyle = {
        backgroundImage: `url('${images[currentImage]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
    };

    const switchToImage = (index) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 10000); // 10 seconds

        return () => {
        clearInterval(timer);
        };
    }, [images.length]);

    return (
        <div className="main__container">
            <div style={backgroundImageStyle} onClick={() => switchToImage((currentImage + 1) % images.length)}>
                <h2 style={{ color: '#FFF', position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', fontSize: '60px', fontWeight: '400', lineHeight: 'normal', fontFamily: 'Inter' }}>
                The change starts now!
                </h2>
                <h4 style={{ color: '#FFF', position: 'absolute', top: '18%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', fontSize: '22px', fontWeight: '400', lineHeight: 'normal', fontFamily: 'Inter' }}>
                Lend a helping hand to those in need
                </h4>
                <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                {images.map((_, index) => (
                    <div
                    key={index}
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: currentImage === index ? 'purple' : 'white',
                        cursor: 'pointer',
                    }}
                    onClick={() => switchToImage(index)}
                    />
                ))}
                </div>
                <Box className="btn__color"
                sx={{position: 'absolute',
                top: '70%',
                left: '38%',
                borderRadius: '10px'}}>
                    <Button sx={{padding: '10px 30px', borderRadius: '10px'}}>
                        Explore our donations options
                    </Button>
                </Box>
            </div>
            <div>
                <Typography component={'h1'} className="text__donation"
                sx={{
                    fontFamily: 'karla',
                    fontSize: '200px',
                    textAlign: 'center',
                    fontWeight: '800'
                }}
                >DONATIONS</Typography>
            </div>
            <div>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Typography 
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            fontFamily: 'Karla',
                            fontWeight: '800',
                            fontSize: '100px',
                            lineHeight: 'normal',
                            width: '510px'
                        }}>Food
                            Donations</Typography>
                        <img src={`${process.env.PUBLIC_URL}/food-donation.png`} alt="Food Donation" 
                        style={{width: '590px', height: '649px'}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography component={'h2'}
                            
                            sx={{color: '#ffc107',
                                fontSize: '100px',
                                fontWeight: '500',
                                fontFamily: 'Karla',
                                lineHeight: 'normal'}}>
                                JOIN US
                                TODAY
                            </Typography>
                            <Typography component={'p'}
                            sx={{fontFamily: 'Inter',
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#1e1035',
                                marginTop: '135px'}}>
                                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button 
                                variant="contained"
                                className="btn__color"
                                sx={{margin: '40px 0px 20px 0px'}}>
                                    Donate today
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop: '70px'}}>
                    <Grid item xs={12} md={6}>
                                                <Typography 
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            fontFamily: 'Karla',
                            fontWeight: '800',
                            fontSize: '100px',
                            lineHeight: 'normal',
                            width: '510px'
                        }}>Clothes
                            Donations</Typography>
                        <img src={`${process.env.PUBLIC_URL}/clothes_donation.png`} alt="Clothes Donation" 
                        style={{width: '590px', height: '649px'}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography component={'h2'}
                            
                            sx={{color: '#ffc107',
                                fontSize: '100px',
                                fontWeight: '500',
                                fontFamily: 'Karla',
                                lineHeight: 'normal'}}>
                                JOIN US<br/>
                                TODAY
                            </Typography>
                            <Typography component={'p'}
                            sx={{fontFamily: 'Inter',
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#1e1035',
                                marginTop: '135px'}}>
                                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button 
                                variant="contained"
                                className="btn__color"
                                sx={{margin: '40px 0px 20px 0px'}}>
                                    Donate today
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop: '70px'}}>
                    <Grid item xs={12} md={6}>
                                                <Typography 
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            fontFamily: 'Karla',
                            fontWeight: '800',
                            fontSize: '100px',
                            lineHeight: 'normal',
                            width: '510px'
                        }}>Blood
                            Donations</Typography>
                        <img src={`${process.env.PUBLIC_URL}/blood_donation.png`} alt="Food Donation" 
                        style={{width: '590px', height: '649px'}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography component={'h2'}
                            
                            sx={{color: '#ffc107',
                                fontSize: '100px',
                                fontWeight: '500',
                                fontFamily: 'Karla',
                                lineHeight: 'normal'}}>
                               Share with
                                someone in need
                            </Typography>
                            <Typography component={'p'}
                            sx={{fontFamily: 'Inter',
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#1e1035',
                                marginTop: '135px'}}>
                                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button 
                                variant="contained"
                                className="btn__color"
                                sx={{margin: '40px 0px 20px 0px'}}>
                                    Donate today
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop: '70px'}}>
                    <Grid item xs={12} md={6}>
                                                <Typography 
                        sx={{
                            display: 'flex',
                            position: 'absolute',
                            fontFamily: 'Karla',
                            fontWeight: '800',
                            fontSize: '100px',
                            lineHeight: 'normal',
                            width: '510px'
                        }}>Monetary
                            Donations</Typography>
                        <img src={`${process.env.PUBLIC_URL}/moneary_donation.png`} alt="Food Donation" 
                        style={{width: '590px', height: '649px'}} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography component={'h2'}
                            
                            sx={{color: '#ffc107',
                                fontSize: '100px',
                                fontWeight: '500',
                                fontFamily: 'Karla',
                                lineHeight: 'normal'}}>
                                    Help us
                                    raise founds                            
                            </Typography>
                            <Typography component={'p'}
                            sx={{fontFamily: 'Inter',
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#1e1035',
                                marginTop: '135px'}}>
                                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button 
                                variant="contained"
                                className="btn__color"
                                sx={{margin: '40px 0px 20px 0px'}}>
                                    Donate today
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Donation