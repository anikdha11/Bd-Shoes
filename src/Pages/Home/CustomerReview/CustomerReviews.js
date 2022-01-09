import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-5'>
            <span className='fw-bold text-primary mb-5 text-success  fw-bold shadow-lg border rounded mx-auto p-2'>Happy Customer</span>
            <Carousel variant="dark" className='shadow-lg w-75 mx-auto border border-danger border-5 mt-5'>
                {
                    reviews.map(review => <Carousel.Item>
                        <img
                            className="d-block w-25"
                            src="https://image.freepik.com/free-vector/blank-sign-template-with-cute-boy-white-background_1308-70991.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='shadow-lg border border-dark rounded-pill'>
                                <h5 className="fw-bold">{review.name}</h5>
                                <h6>{review.phone}</h6>
                                <p>Email: {review.email}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default CustomerReviews;