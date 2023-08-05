import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import "./styles.css";
import HeaderCarousal from "../components/common/HeaderCarousal";

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
                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
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
                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
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
                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
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
              >
                Lorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem ipsum sit
                dolorLorem ipsum sit dolorLorem ipsum sit dolorLorem.
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
