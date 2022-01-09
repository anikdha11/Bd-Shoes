import React, { useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-5">
            <span className='mt-5 text-info  fw-bold shadow-lg border rounded mx-auto p-2'>Popular Products</span>
            <Container >
                <Row className='justify-content-md-center justify-content-xs-center mt-5'>
                    {
                        products.map(product =>
                            <Col className='shadow-lg border rounded border-secondary border-2 ms-md-4 me-sm-1 mb-4 my-auto' md={3} sm={6} >
                            <Product 
                                key={product.name}
                                product={product}>
                                    
                                </Product>
                            </Col>
                        )
                    }
              
                </Row>
            </Container>






        </div>
    );
};

export default Products;