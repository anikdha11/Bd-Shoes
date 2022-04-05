import React from 'react';
import { Button } from 'react-bootstrap';
import "./Product.css"

const Product = (product) => {
    const { name, img,price } = product.product;
    return (
        <div className='box'>
                <img className='img-fluid img-zoom mt-2 rounded' style={{height:'200px'}} src={img} alt="" />
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <Button style={{fontWeight:'700'}} variant='outline-light mb-2'>More Details</Button>

        </div>
    );
};

export default Product;