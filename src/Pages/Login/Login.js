import React, { useState } from 'react';
import { Button, Col, Form,Row} from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn,loginUser } = useFirebase();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const signInWithGoogle = () => {
        handleGoogleSignIn(from, navigate)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    return (
        <>
            <h1 className='text-secondary'>Login</h1>
            <Form className='w-50 mx-auto' onSubmit={handleLoginSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="10">
                        <Form.Control onBlur={handleOnChange} placeholder="email@example.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm="10">
                        <Form.Control onBlur={handleOnChange} type="password" placeholder="Password" />
                    </Col>
                    <Button style={{width:'5rem'}} className='mt-2 ms-3' type='submit' variant="outline-dark">Login</Button>
                    <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant='outline-success'>New user? Please Register</Button></NavLink>

                </Form.Group>
            </Form>

            <button className=' border rounded shadow border-dark' onClick={signInWithGoogle}><i className="fab fa-google text-secondary" style={{ fontSize: '15px' }}></i></button>

        </>
    );
};

export default Login;