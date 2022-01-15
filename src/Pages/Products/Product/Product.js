import React from 'react';
import { Button } from 'react-bootstrap';

const Product = (product) => {
    const { name, img,price } = product.product;
    return (
        <>
                <img className='img-fluid' style={{height:'200px',width:""}} src={img} alt="" />
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <Button style={{fontWeight:'700'}} variant='outline-light'>More Details</Button>

        </>
    );
};

export default Product;