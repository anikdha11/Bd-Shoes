import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div style={{marginBottom:'10px'}}>    
  <AwesomeSlider
    media={[
      {
        source: 'https://image.freepik.com/free-psd/summer-flip-flop-shoes-mockup-psd-women-rsquo-s-apparel_53876-115249.jpg',
      },
      {
        source: 'https://image.freepik.com/free-photo/satisfied-women-with-new-shoes_329181-3946.jpg',
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