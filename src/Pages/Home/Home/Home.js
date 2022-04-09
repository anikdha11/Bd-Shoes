import React from 'react';
import Products from '../../Products/Products/Products';
import Banner from '../Banner/Banner';
// import Blogs from '../Blogs/Blogs';
import CustomerReviews from '../CustomerReview/CustomerReviews';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Products></Products> 
           <ExtraSection></ExtraSection>
           {/* <Blogs></Blogs> */}
           <CustomerReviews></CustomerReviews>
        </>
    );
};

export default Home;