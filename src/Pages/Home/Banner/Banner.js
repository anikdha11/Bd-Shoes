import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import "./Banner.css"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoPlaySpeed:4000
  };
  return (
    <div>
      <Slider className='slider p-5' {...settings}>
        <div className=' text-center shadow'>
          <div className='d-flex justify-content-center p-1'>
            <h1>Casual Collection</h1>
            <Button variant='dark'>Shop Now</Button>
          </div>
          <img style={{width:'62rem',height:"37rem"}} className='mx-auto' src="https://images.pexels.com/photos/1020372/pexels-photo-1020372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          
        </div>
        <div className=' text-center'>
        <div className='d-flex justify-content-center p-1'>
            <h1>Casual Collection</h1>
            <Button variant='dark'>Shop Now</Button>
            </div>
          <img style={{width:'60rem',height:"37rem"}} className='mx-auto' src="https://images.pexels.com/photos/5863649/pexels-photo-5863649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </div>
        <div className=' text-center'>
        <div className='d-flex justify-content-center p-1'>
            <h1>Casual Collection</h1>
            <Button variant='dark'>Shop Now</Button>
            </div>
          <img style={{width:'60rem',height:"37rem"}} className='mx-auto' src="https://images.pexels.com/photos/5705482/pexels-photo-5705482.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;