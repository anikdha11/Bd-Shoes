import React from 'react';
import { Col,Row } from 'react-bootstrap';
import img1 from "../../../image/banner/home-banner-1.webp"
import img2 from "../../../image/banner/home-banner-2.webp"

const ExtraSection = () => {
    return (
        <>
  <Row className='mt-5'>
    <Col className='mb-md-5' xs={12} sm={12}  md={6} lg={6}>
    <img className='img-fluid border-end border-4 border-warning' src={img1} alt="" />
    </Col>
    <Col className='mt-md-5 '>
    <img className='img-fluid border-start border-4 border-danger' src={img2} alt="" />
    </Col>
  </Row>
</>
    );
};

export default ExtraSection;