import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='bg-dark text-secondary pt-4'>
            <Container className="mt-4">

                <Row>
                    <Col md={4} sm={8}>
                        <div className="text-start fw-bold font-p">
                            <p> <Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1rem', color: 'gray', border: '2px solid white', borderRadius: '10px', padding: '5px', boxShadow: '1px solid gray', marginBottom: '1.5rem' }} to="/"> BD Shoes</Link></p>
                            <h6 className='fw-bold text-light'>ADDRESS OFFICE 1</h6>
                            <p>460 West 34th Street, 15th floor, New York</p>
                            <p>Email:<a className='email' style={{ textDecoration: 'none', fontSize: '0.8rem' }} href="mailto:xyz2123@gmail.com">xyz213@gmail.com</a></p>
                            <p>Phone:+88 019 336 ***</p>
                            <p>Fax: ++393 32734 5003</p>
                        </div>
                        <hr style={{ width: '8.5rem' }} />
                        <Col>
                            <div className="text-start fw-bold font-p">
                                <h6 className='fw-bold text-light'>ADDRESS OFFICE 2</h6>
                                <p>PO Box 16122 Collins Victoria 3000 Australia</p>
                                <p>Email: <a className='email' style={{ textDecoration: 'none', fontSize: '0.8rem' }} href="mailto:abc2123@gmail.com">abc123@gmail.com</a></p>
                                <p>Phone:+88 019 456 ***</p>
                                <p>Fax: ++393 32734 5003</p>
                            </div>

                        </Col>
                    </Col>
                    <Col md={3} sm={8} className='text-start text-light footer-hover'>
                        <h6 className='fw-bold text-white '> FIND OUR STORE</h6>
                        <p>COUPON CODE</p>
                        <p>SIGNUP FOR EMAIL</p>
                        <p>SITE FEEDBACK</p>
                        <p>CAREERS</p>

                    </Col>

                    <Col md={3} sm={8} className='text-start footer-hover'>
                        <h6 className='fw-bold text-light'>GET HELP</h6>
                        <p> Order Status</p>
                        <p> Shipping And Delivery</p>
                        <p>Returns</p>
                        <p>Payment Options</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col className='text-start footer-hover'>
                        <h6 className='fw-bold text-light'>PRODUCTS</h6>
                        <p>Shoes</p>
                        <p>Clothings</p>
                        <p>Accessries</p>
                        <p>Football Shoes</p>
                    </Col>


                </Row>
            </Container>
            <hr style={{ backgroundColor: 'white', marginTop: '10px', }} />
            <Col>
                <div className="d-flex justify-content-evenly flex-wrap align-items-center link pb-4">
                    <h6 className="mt-3 fw-bold">All Right Reserved &#169; 2021 Anik Dhar</h6>
                    <div>
                        <a className="border p-2" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                        <a className="border p-2" href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a className="border p-2" href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="border p-2" href="#instragram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>


            </Col>
        </div>
    );
};

export default Footer;