import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>    
  <AwesomeSlider
    media={[
      {
        source: 'https://image.freepik.com/free-photo/groom-s-shoes-with-flowers-bow_8353-10634.jpg',
      },
      {
        source: 'https://image.freepik.com/free-photo/wedding-groom-shoes-stand-stool_8353-9646.jpg',
      },
      {
        source: 'https://image.freepik.com/free-photo/red-leather-shoes-stand-light-wooden-floor_8353-691.jpg',
      },
    ]}
  />
  </div>
    );
};

export default Banner;