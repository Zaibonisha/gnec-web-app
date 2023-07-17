import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['hands.png', 'variant2.png', 'variant3.png', 'variant2.png']; // Add your image URLs here

  const backgroundImageStyle = {
    backgroundImage: `url('${images[currentImage]}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
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
        <h1 style={{ color: '#5a189a', position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
          The change starts now!
        </h1>
        <h2 style={{ color: '#5a189a', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
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
      </div>
    </div>
  );
};

export default Home;
