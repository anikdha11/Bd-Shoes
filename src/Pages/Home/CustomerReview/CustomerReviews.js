import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./CustomerReviews.css"
import img1 from "../../../image/review-1.webp"
import img2 from "../../../image/review-2.webp"
import img3 from "../../../image/review-3.webp"

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <div className='mt-5 review mb-5'>
            <Slider {...settings}>
                <div>
                    <div style={{ height: '300px' }}>
                        <div style={{marginTop:"4rem"}} className='d-flex flex-column justify-content-center align-items-center'>
                            <img className='img-fluid rounded-circle' src={img1} alt="" />
                            <div style={{ backgroundColor: 'ghostwhite', margin: '40px' }}>
                                <h4 className='title-2'>Jane - Manager</h4>
                                <h6>
                                    “Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div >
                    <div style={{ height: '300px' }}>
                        <div style={{marginTop:"4rem"}} className='d-flex flex-column justify-content-center align-items-center'>
                            <img className='img-fluid rounded-circle' src={img2} alt="" />
                            <div style={{ backgroundColor: 'ghostwhite', margin: '40px' }}>
                                <h4 className='fw-bold title-2'>Lanna - Designer</h4>
                                <h6>
                                    “Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '300px' }}>
                        <div style={{marginTop:"4rem"}} className='d-flex flex-column justify-content-center align-items-center'>
                            <img className='img-fluid rounded-circle' src={img3} alt="" />
                            <div style={{ backgroundColor: 'ghostwhite', margin: '40px' }} >
                                <h4 className='fw-bold title-2'>Beck - Accoutant</h4>
                                <h6>
                                    “Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CustomerReviews;