import React, {useEffect, useState} from "react";
import { Button, Box, Typography, Grid, Paper, TextField } from "@mui/material";


const Contact = () => {
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
        <div>
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
                >CONTACT</Typography>
            </div>
            <Grid container spacing={3} sx={{padding: '0px 20px'}}>
                <Grid item md={4} xs={12} sm={6}
                className="slide-in-fwd-center ">
                    <Paper elevation={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '433px',
                        height: '320px',
                        backgroundColor: '#FFC107'
                    }} 
                    className="slide-in-fwd-center">
                        <Box SX={{display: 'flex', flexDirection: 'column'}}>
                            <img src={`${process.env.PUBLIC_URL}/phone.png`} alt="Phone" />
                            <Typography className="text__color" 
                            sx={{
                                fontFamily: 'Inter',
                                fontSize: '28px',
                                fontWeight: '600'
                            }}>Call Us</Typography>
                            <Typography>+38600000000</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper elevation={2} 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '433px',
                        height: '320px',
                         backgroundColor: '#FFC107'
                    }}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <img src={`${process.env.PUBLIC_URL}/email.png`} alt="Phone" />
                            <Typography className="text__color" sx={{
                                fontFamily: 'inter',
                                fontSize: '28px',
                                fontWeight: '600'
                            }}>EMAIL US</Typography>
                            <Typography>example@google.com</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper elevation={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '432px',
                        height: '319px',
                        backgroundColor: '#FFC106'
                    }}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <img src={`${process.env.PUBLIC_URL}/location.png`} alt="Phone" />
                            <Typography className="text__color" sx={{
                                fontFamily: 'inter',
                                fontWeight: '600',
                                fontSize: '28px'
                            }}>LOCATION</Typography>
                            <Typography>Adress 1: street nu 23</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={{backgroundColor: "#D9D9D9"}}>
                <Typography component={'h1'} className="text__donation"
                sx={{
                    fontFamily: 'karla',
                    fontSize: '123px',
                    textAlign: 'center',
                    fontWeight: '800',
                    color: '#000'
                }}
                >UPLOAD RANDOM GOOGLE MAP IN THIS PLACE</Typography>
            </Box>
            <Grid container sx={{padding: '0 20px'}}>
                <Box sx={{display: 'flex'}}>
                    <Grid item md={5} xs={12}>
                        <Typography
                        sx={{
                            fontFamily: 'karla',
                            fontSize: '100px',
                            fontWeight: '500',
                            lineHeight: 'normal',
                            color: '#FFC107',
                            padding: '20px 30px'
                        }}>
                            Have a question?
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Typography component={'p'}
                        sx={{
                            padding: '75px 60px'
                        }}>
                            Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
                        </Typography>
                    </Grid>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display: 'flex'}}>
                        <Grid item md={7} xs={12}>
                            <Box component={'form'}
                            sx={{
                                '& .MuiTextField-root': {maxWidth: '777px'}
                            }}>
                                <Box sx={{width: '777px'}}>
                                    <TextField
                                    fullWidth
                                    required
                                    label="Enter your name"
                                    variant="filled"
                                    />
                                    <TextField
                                    fullWidth 
                                    required
                                    label="Enter your email"
                                    variant="filled" 
                                    sx={{
                                        padding: '40px 0px'
                                    }}/>
                                    <TextField
                                    fullWidth
                                    required
                                    multiline
                                    label="Enter your message"
                                    rows={6} 
                                    sx={{
                                        padding: '0px 0px 20px 0px'
                                    }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <img src={`${process.env.PUBLIC_URL}/contact.png`} alt="Contact US"
                            width="553px"
                            height="370px" />
                        </Grid>
                    </Box>
                    <Box className="btn__color" sx={{width: '288px', borderRadius: '10px'}}>
                        <Button fullWidth sx={{display: 'flex', justifyContent: 'center',
                            padding: '20px 20px'}}>
                                <Typography className="text__color">Send</Typography>
                            </Button>
                    </Box>
                </Box>
            </Grid>
        </div>
    )
}

export default Contact