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
    width: "25vw",
    
    marginTop: "50px",
    
  };

  return (
    <MUICard style={{marginRight:"10px",
    marginLeft: "10px", width:"30vw" , }}>
      <CardContent>
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "20vw", height: "30vh" }}
          />
        )}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body">{description}</Typography>
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
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card
              title="Mision"
              description="The Global NGO Executive Committee (GNEC) is a storied nonprofit that has, for 60 years, partnered with the United Nations to guarantee a voice at the decision-making table for civil society leaders. And that role has never been more critical, as the world battles a global pandemic and a planet-threatening climate crisis, among other challenges.The Executive Committee was founded to promote a closer working relationship between the United Nations and the NGOs associated with UN DGC. GNEC acts as a liaison between the NGO community and UN.
                           The Committee organizes the annual UN Civil Society Conference. "
              image="mision1.png"
              buttonLabel="Join the mission"
              buttonLink="/volunteers"
              
            />
          </Grid>
          <Grid item>
            <Card
              title="Vision"
              description="The Global NGO Executive Committee (GNEC) is a storied nonprofit that has, for 60 years, partnered with the United Nations to guarantee a voice at the decision-making table for civil society leaders. And that role has never been more critical, as the world battles a global pandemic and a planet-threatening climate crisis, among other challenges. GNEC serves 1,500+ UN-vetted global NGOs, which are on the frontlines of tackling these and others of the most pressing issues of our time. GNEC provides support for these purpose-driven organizations in their efforts to make sure no one on the planet is left behind."
              image="vision1.png"
              buttonLabel="Help us today"
              buttonLink="/donations"
              
            />
          </Grid>
          <Grid item>
            <Card
              title="Goals"
              description="In partnership with the UN DGC, the Executive Committee organizes the annual UN Civil Society Conference (formerly known as the UN DPI NGO Conference), at the UN Headquarters or abroad, which facilitates collaboration among NGOs, empowers civil society, and increases public understanding of the United Nations’ critical efforts on issues of economic and social development, climate justice, human rights, the rule of law, peace-building, and other SDGs. This event is an important opportunity for NGOs from all around the world to network and promote the efforts of their organizations."
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
