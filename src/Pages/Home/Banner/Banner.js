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
    autoplay: true,
    autoPlaySpeed: 4000
  };
  return (
    <>
      <Slider className='slider p-5' {...settings}>
        <div className=' banner-1'>
          <div className='text-start mx-auto mt-5 text-dark my-auto mb-5 ms-5 '>
            <h4>BEST ITEM <br /> THIS SUMMER</h4>
            <hr style={{backGroundColor:'dark'}} className='w-25 p-1 text-dark bg-dark' />
            <h1 style={{color:'#ec4c76'}} className='fw-bold'>RECOVERY</h1>
            <p className='w-50 d-md-block d-sm-none d-none'>Supa wanted something that was going to rep his East Coast
              roots and, more specifically, his hometown of New York City in  a big way.</p>
            <Button variant='dark'>Shop Now</Button>
          </div>
        </div>
        <div className='banner-2'>
          <div className='text-start mx-auto mt-5 text-white my-auto mb-5 ms-5 '>
            <h4>March 2002 </h4>
            <h4> Nike SB Dunk Low Pro</h4>
            <hr className='w-25 p-1' />
            <h1 className='fw-bold'> SUBA</h1>
            <p className='w-50 d-md-block d-sm-none d-none'>Supa wanted something that was going to rep his East Coast
              roots and, more specifically, his hometown of  New York City in  a big way.</p>
            <Button variant='dark'>Shop Now</Button>
          </div>
        </div>
        <div className=' banner-3 border'>
          <div className='text-start mx-auto mt-5 text-white my-auto mb-5 ms-5'>
            <h3>March 2002</h3>
            <hr className='w-25 p-1' />
            <h3> Nike SB Dunk Low Pro</h3>
            <h1 className='text-danger'>SUBA</h1>
            <p className='w-50 d-sm-none d-md-block d-none'>Supa wanted something that was going to rep his East Coast
              roots and, more specifically, his hometown of New York City in  a big way.</p>
            <Button variant='dark'>Shop Now</Button>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;