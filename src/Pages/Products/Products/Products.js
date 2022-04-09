import React, { useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import "../Product/Product.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-5">
              <h5 className='mt-5 p-2 text-start ms-4 product-title'>FEATURES PRODUCTS</h5>
          
            <div className='d-flex justify-content-lg-end justify-content-end me-5 title-1'>
                <h6>NIKE</h6>
                <h6 className='ms-2 me-2'>ADIDAS</h6>
                <h6>MEN</h6>
                <h6 className='ms-2'>WOMEN</h6>
            </div>
   
            <Container >
                <Row className='justify-content-md-center justify-content-xs-center mt-5'>
                    {
                        products.map(product =>
                            <Col key={product.name} className='rounded mb-4 my-auto mx-auto col-hover' md={3} sm={6} >
                            <Product 
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