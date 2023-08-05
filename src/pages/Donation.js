import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import "./styles.css";
import HeaderCarousal from "../components/common/HeaderCarousal";
import Footer from '../components/common/Footer';

const Donation = () => {

  return (
    <div className="main__container">
      <HeaderCarousal />
      <div>
        <Typography
          component={"h1"}
          className="text__donation"
          sx={{
            fontFamily: "karla",
            fontSize: "200px",
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          DONATIONS
        </Typography>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                display: "flex",
                position: "absolute",
                fontFamily: "Karla",
                fontWeight: "800",
                fontSize: "100px",
                lineHeight: "normal",
                width: "510px",
              }}
            >
              Food Donations
            </Typography>
            <img
              src={`${process.env.PUBLIC_URL}/food-donation.png`}
              alt="Food Donation"
              style={{ width: "590px", height: "649px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component={"h2"}
                sx={{
                  color: "#ffc107",
                  fontSize: "100px",
                  fontWeight: "500",
                  fontFamily: "Karla",
                  lineHeight: "normal",
                }}
              >
                JOIN US TODAY
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#1e1035",
                  marginTop: "135px",
                }}
              >
                Because GNEC supports and strengthens the work of so many other NGOs throughout the world.
                Your ONE donation or sponsorship here is able to reach nearly 1550 NGOs, already vetted by the UN, and active with great programming that makes us all proud.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  className="btn__color"
                  sx={{ margin: "40px 0px 20px 0px" }}
                >
                  Donate today
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "70px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                display: "flex",
                position: "absolute",
                fontFamily: "Karla",
                fontWeight: "800",
                fontSize: "100px",
                lineHeight: "normal",
                width: "510px",
              }}
            >
              Clothes Donations
            </Typography>
            <img
              src={`${process.env.PUBLIC_URL}/clothes_donation.png`}
              alt="Clothes Donation"
              style={{ width: "590px", height: "649px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component={"h2"}
                sx={{
                  color: "#ffc107",
                  fontSize: "100px",
                  fontWeight: "500",
                  fontFamily: "Karla",
                  lineHeight: "normal",
                }}
              >
                JOIN US
                <br />
                TODAY
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#1e1035",
                  marginTop: "135px",
                }}
              >
                Words cannot begin to capture the many dimensions of Patrick Sciarratta and the enormity of what the world has lost in his passing. He was a mover and a shaker, a colleague, an ally, a mentor, an innovator, an actor, a juggler, a global citizen, a passionate advocate for the inclusion of Civil Society and youth, and most importantly, a friend to all who knew him. 
                His imagination and energy knew nobounds. He was vibrant, effervescent, and charismatic. He had the ability to dream big AND make those dreams a reality. 
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  className="btn__color"
                  sx={{ margin: "40px 0px 20px 0px" }}
                >
                  Donate today
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "70px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                display: "flex",
                position: "absolute",
                fontFamily: "Karla",
                fontWeight: "800",
                fontSize: "100px",
                lineHeight: "normal",
                width: "510px",
              }}
            >
              Blood Donations
            </Typography>
            <img
              src={`${process.env.PUBLIC_URL}/blood_donation.png`}
              alt="Food Donation"
              style={{ width: "590px", height: "649px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component={"h2"}
                sx={{
                  color: "#ffc107",
                  fontSize: "100px",
                  fontWeight: "500",
                  fontFamily: "Karla",
                  lineHeight: "normal",
                }}
              >
                Share with someone in need
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#1e1035",
                  marginTop: "135px",
                }}
              >
                In service to Civil Society, in his 2 year tenure as the President of the Global NGO Executive Committee, he never ceased to innovate and develop programs for the benefit of communities around the world. He had many more ideas for how to strengthen the NGO community and
                further enhance the inclusion of Civil Society at the United Nations. We at GNEC will work to carry his torch onwards.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  className="btn__color"
                  sx={{ margin: "40px 0px 20px 0px" }}
                >
                  Donate today
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "70px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                display: "flex",
                position: "absolute",
                fontFamily: "Karla",
                fontWeight: "800",
                fontSize: "100px",
                lineHeight: "normal",
                width: "510px",
              }}
            >
              Monetary Donations
            </Typography>
            <img
              src={`${process.env.PUBLIC_URL}/moneary_donation.png`}
              alt="Food Donation"
              style={{ width: "590px", height: "649px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                component={"h2"}
                sx={{
                  color: "#ffc107",
                  fontSize: "100px",
                  fontWeight: "500",
                  fontFamily: "Karla",
                  lineHeight: "normal",
                }}
              >
                Help us raise founds
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#1e1035",
                  marginTop: "135px",
                }}
              >Your ONE donation or sponsorship here is able to reach nearly 1550 NGOs, already vetted by the UN, and active with great programming that makes us all proud.
                
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  className="btn__color"
                  sx={{ margin: "40px 0px 20px 0px" }}
                >
                  Donate today
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
};

export default Donation;
