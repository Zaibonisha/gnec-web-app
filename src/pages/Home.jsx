import React from "react";
import {
  Card as MUICard,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import HeaderCarousal from "../components/common/HeaderCarousal";

const Card = ({ title, description, image, buttonLabel, buttonLink }) => {
  const buttonStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    backgroundColor: "#fca311", // Replace with your desired background color
    padding: "8px 16px", // Add padding for better appearance
    borderRadius: "4px", // Add border radius for rounded corners
    width: "20vw",
    marginTop: "50px",
  };

  return (
    <MUICard>
      <CardContent>
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "20vw", height: "30vh" }}
          />
        )}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Button component="a" href={buttonLink} style={buttonStyle}>
          {buttonLabel}
        </Button>
      </CardContent>
    </MUICard>
  );
};

const Home = () => {
  // const [currentImage, setCurrentImage] = useState(0);

  // const images = ['hands.png', 'variant2.png', 'variant3.png', 'variant2.png']; // Add your image URLs here

  // const backgroundImageStyle = {
  //   backgroundImage: `url('${images[currentImage]}')`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '80vh',
  //   position: 'relative',
  // };

  // const switchToImage = (index) => {
  //   setCurrentImage(index);
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //   }, 10000); // 10 seconds

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [images.length]);

  return (
    <div>
      {/* <div style={backgroundImageStyle} onClick={() => switchToImage((currentImage + 1) % images.length)}>
        <h1 style={{ color: '#003459', position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
          The change starts now!
        </h1>
        <h2 style={{ color: '#003459', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
          Lend a helping hand to those in need
        </h2>
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
      </div> */}
      <HeaderCarousal />
      {/* Second Image */}
      <div
        style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginRight: "100px" }}>
          {/* Third Image */}
          <img
            src={`${process.env.PUBLIC_URL}/Line 1.png`} // Replace 'third_image_url.png' with the actual URL of the third image
            alt="Third Image"
            style={{ width: "10vh", height: "80vh" }}
          />
          {/* Fourth Image */}
          <img
            src={`${process.env.PUBLIC_URL}/mousescrolldown.png`} // Replace 'fourth_image_url.png' with the actual URL of the fourth image
            alt="Fourth Image"
            style={{ width: "10vw", height: "auto", marginBottom: "10vw" }}
          />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/howdowe.png`} // Replace 'second_image_url.png' with the actual URL of the second image
          alt="Second Image"
          style={{ width: "75%", height: "80vh" }}
        />
      </div>
      {/* Card Components */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card
              title="Mision"
              description="This is the description for Card 1."
              image="mision1.png"
              buttonLabel="Join the mission"
              buttonLink="/volunteers"
            />
          </Grid>
          <Grid item>
            <Card
              title="Vision"
              description="This is the description for Card 2."
              image="vision1.png"
              buttonLabel="Help us today"
              buttonLink="/donations"
            />
          </Grid>
          <Grid item>
            <Card
              title="Passion"
              description="This is the description for Card 3."
              image="goals.png"
              buttonLabel="Reach the goals with us"
              buttonLink="/causes"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
