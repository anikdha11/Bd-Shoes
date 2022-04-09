import React,{ useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Header.css"
const Header = () => {
    const {user,handleSignOut} =useFirebase();
    const [show,setShow] = useState(true)
    const controlNav =()=>{
        if(window.scroll >100){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',controlNav)
        return () => {
            window.removeEventListener('scroll',controlNav)
        }
    },[])
    return (
        <>
            <Navbar className={`nav ${show && 'Navbar'}`} expand={false}>
                <Container>
                    <Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1rem', color: 'gray', border: '2px solid black', borderRadius: '10px', padding: '5px',boxShadow:'1px solid gray' }} to="/">
                        BD Shoes
                    </Link>
                   {
                       user?.email && <div>
                           <img className='w-50 border rounded-circle' src={user.photoURL} alt="" />
                           <h4>{user.displayName}</h4>
                           <Button variant="outline-dark" onClick={handleSignOut}>Logout</Button>
                       </div>
                   }

                    <Navbar.Toggle style={{border:'0',color:'transparent',borderRadius:'20px'}} className="toggle"  aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"

                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontWeight: '100', textDecoration: 'none', fontSize: '1.5rem', color: 'black',border:'2px solid gray',borderRadius: '10px',padding:'2px' }} id="offcanvasNavbarLabel">BD Shoes</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                                <Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1.5rem' }} to="/home">Home</Link>
                                <Nav.Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1.5rem' }} href="#action2">Shop</Nav.Link>
                                <Nav.Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1.5rem' }} href="#action2">Blog</Nav.Link>
                                <Link style={{ fontWeight: '200', textDecoration: 'none', fontSize: '1.5rem' }} to="/login">Login</Link>
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