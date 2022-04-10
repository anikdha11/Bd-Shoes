import React, { useState } from 'react';
import { Button, Col, Form,Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const {saveUser} = useFirebase()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // if (loginData.password !== loginData.password2) {
        //     alert('Your password did not match');
        //     return
        // }
        saveUser(loginData.email, loginData.password, loginData.name, location);
        e.preventDefault();
        
    }
    return (
        <div>
            <h1 className='text-secondary'>Register</h1>
            <Form className='w-50 mx-auto mb-5' onSubmit={handleLoginSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="10">
                        <Form.Control name="name" type='text' onBlur={handleOnBlur} placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Col sm="10">
                        <Form.Control name="email" onBlur={handleOnBlur}  type="email" placeholder="Enter email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Col sm="10">
                        <Form.Control name='password' onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Col>
                   
                    <Button style={{width:'5rem'}} className='mt-2 ms-3' type='submit' variant="outline-dark">Register</Button>
                    <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant='outline-success'>New user? Please login</Button></NavLink>

                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;