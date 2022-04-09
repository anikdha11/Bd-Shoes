import React from 'react';
// import { Button } from 'react-bootstrap';
import "./Product.css"

const Product = (product) => {
    const { name, img,price } = product.product;
    return (
        <div className='border ps-3 pe-3 bg-product'>
                <img className='img-fluid mt-2 rounded ' style={{height:'200px'}} src={img} alt="" />
                <div className='d-flex justify-content-between'>
                <div className='text-start title'>
                <h6 className=''>{name}</h6>
                <span>Jordan,Nike</span>
                </div>
                <p>${price}</p>
                </div>
                
                
                {/* <Button style={{fontWeight:'700'}} className="mb-2 mt-2" variant='outline-dark'>More Details</Button> */}


        </div>  
    );
};

export default Product;