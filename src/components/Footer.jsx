import React from "react";
import styled from "styled-components";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import '../pages/styles.css'
const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: "#4C2689",
            marginTop: "175px"
        }}>
            <Typography sx={{
                display: 'flex', 
                justifyContent: 'center',
                fontSize: '60px',
                color: '#FFC107'}}>
                The change starts now!
            </Typography>
            <Typography sx={{
                display: 'flex', 
                justifyContent: 'center',
                fontSize: '22px',
                color: '#fff'}}>
                The change starts now!Land a helping hand to those in need!
            </Typography>
            <Grid container>
                <Grid item md={6} xs={12} sx={{padding: '54px 15px'}}>
                    <Typography
                    sx={{
                        color: '#fff',
                        fontSize: '38px',
                        fontFamily: 'inter'
                    }}>
                        LOGO
                    </Typography>
                    <Box sx={{display: 'flex', columnGap: "5px", marginTop: '20px'}}>
                        <Typography
                        sx={{
                            fontFamily: 'inter',
                            fontSize: '22px',
                            color: '#FFC107'
                        }}>Follow us for more causes</Typography>
                        <img src={`${process.env.PUBLIC_URL}/facebook.svg`} alt="Facebook" />
                        <img src={`${process.env.PUBLIC_URL}/instagram.svg`} alt="Instagram" />
                    </Box>
                    <Box sx={{padding: '15px 0px'}}>
                        <Grid container>
                            <Grid item md={8} xs={12}>
                                <TextField
                                fullWidth
                                required
                                label="Enter your email"
                                sx={{
                                    background: "#fff"
                                }}></TextField>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box className="btn__color" sx={{
                                    position: 'absolute',
                                    borderRadius: '10px', 
                                    marginLeft: '-10px'}}>
                                    <Button sx={{padding: '16px 40px'}}>
                                        <Typography>Subscribe</Typography>
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{
                    padding: "90px 40px"
                }}>
                    <Box>
                        <Grid container>
                            <Grid item md={4}>
                                <Typography sx={{color: "#FFC107", fontWeight: '600'}}>For Donators</Typography>
                                <Typography className="text__white">About us</Typography>
                                <Typography className="text__white">Donations</Typography>
                                <Typography className="text__white">Donations</Typography>
                                <Typography className="text__white">Causes</Typography>
                                <Typography className="text__white">Contact</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography sx={{color: "#FFC107", fontWeight: '600'}}>For Volunteers</Typography>
                                <Typography className="text__white">About us</Typography>
                                <Typography className="text__white">Volunteer</Typography>
                                <Typography className="text__white">Contact</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography sx={{color: "#FFC107", fontWeight: '600'}}>For Donations</Typography>
                                <Typography className="text__white">About us</Typography>
                                <Typography className="text__white">Contact</Typography>
                            </Grid>
                        </Grid>
                    </Box>                
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer