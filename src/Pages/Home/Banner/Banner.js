import React from 'react';
import Slider from "react-slick";


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider className='shadow' {...settings}>
        <div className=' text-center w-50 shadow'>
          <h3 className='shadow'>Item-1</h3>
          <img className='mx-auto pb-2 w-75' src="https://image.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg" alt="" />
        </div>
        <div className=' text-center w-50 shadow'>
          <h3 className='shadow'>Item-2</h3>
          <img className='mx-auto pb-2 w-75' src="https://as2.ftcdn.net/v2/jpg/02/45/20/51/1000_F_245205199_IeaOOZ9Uy2RrfeeyBTKwHawOwjOeSaRb.jpg" alt="" />
        </div>
        <div className=' text-center w-50 shadow'>
          <h3 className='shadow'>Item-3</h3>
          <img className='mx-auto pb-2 w-75' src="https://as1.ftcdn.net/v2/jpg/02/38/67/48/1000_F_238674804_K6KU6MuoZbfOSWyWlFJdHY2gsm8D91ZK.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;