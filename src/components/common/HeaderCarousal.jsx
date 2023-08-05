import React, { useState, useEffect } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import "../../pages/styles.css";

const HeaderCarousal = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["hands.png", "variant2.png", "variant3.png", "variant2.png"]; // Add your image URLs here
  const backgroundImageStyle = {
    backgroundImage: `url('${images[currentImage]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    position: "relative",
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
      <div
        style={backgroundImageStyle}
        onClick={() => switchToImage((currentImage + 1) % images.length)}
      >
        <h2
          style={{
            color: "#FFF",
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            fontSize: "60px",
            fontWeight: "400",
            lineHeight: "normal",
            fontFamily: "Inter",
          }}
        >
          The change starts now!
        </h2>
        <h4
          style={{
            color: "#FFF",
            position: "absolute",
            top: "18%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "normal",
            fontFamily: "Inter",
          }}
        >
          Lend a helping hand to those in need
        </h4>
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: currentImage === index ? "purple" : "white",
                cursor: "pointer",
              }}
              onClick={() => switchToImage(index)}
            />
          ))}
        </div>
        <Box
          className="btn__color"
          sx={{
            position: "absolute",
            top: "70%",
            left: "38%",
            borderRadius: "10px",
          }}
        >
          <Button sx={{ padding: "10px 30px", borderRadius: "10px" }}>
            Explore our donations options
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default HeaderCarousal;
