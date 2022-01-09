import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "../../image/shoe.png"

const Header = () => {
    return (
        <>
            <Navbar className='p-2' sticky='top' bg='gray' expand={false}>
                <Container>
                    <Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1rem', color: 'red', border: '2px solid black', borderRadius: '10px', padding: '5px',boxShadow:'1px solid gray' }} to="/">
                        <img
                            alt=""
                            src={img}
                            width="30"
                            height="30"
                            className="d-inline-block align-top my-auto"
                        />{' '}
                        BD Shoes
                    </Link>
                    {/* <Link style={{ fontWeight: '400', textDecoration: 'none', fontSize: '1rem', color: 'red', border: '2px solid black', borderRadius: '10px', padding: '5px', background: 'white' }} to="/"></Link> */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"

                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontWeight: '500', textDecoration: 'none', fontSize: '1.5rem', color: 'black',border:'2px solid gray',borderRadius: '10px',padding:'2px' }} id="offcanvasNavbarLabel">BD Shoes</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                                <Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1.5rem' }} to="/home">Home</Link>
                                <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1.5rem' }} href="#action2">Shop</Nav.Link>
                                <Nav.Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1.5rem' }} href="#action2">Blog</Nav.Link>
                                <Link style={{ fontWeight: '700', textDecoration: 'none', fontSize: '1.5rem' }} to="/login">Login</Link>
                            </Nav>
                            <Form className="d-flex mt-2">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;