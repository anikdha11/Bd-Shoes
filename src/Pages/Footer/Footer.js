import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
             <hr className=" bg-primary" />
            <Container className="mt-5">
            
                <Row>
                    <Col md={6} sm={8}>
                        <div className="text-start fw-bold">
                          <h4>Store Information</h4>
                            <p><i class="fas fa-search-location"></i> abc,Dhaka,Bangladesh</p>
                            <p><i class="fas fa-phone-alt"></i> 000-000-000</p>
                            <p><i class="far fa-envelope"></i> abc-000@gmail.com</p>
                        </div>
                    </Col>
 
                    <Col md={6} sm={8}>
                        <div  className="d-flex justify-content-around mb-5">
                        <a className="border rounded-pill p-3 border-info border-2" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                        <a className="border rounded-pill p-3 border-info border-2" href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a className="border rounded-pill p-3 border-info border-2" href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="border rounded-pill p-3 border-info border-2" href="#instragram"><i className="fab fa-instagram"></i></a>
                        </div>
                        
                        <h6 className="mt-3 fw-bold">All Right Reserved &#169; 2021 Anik Dhar</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;