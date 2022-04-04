import React from 'react';
import '../ReviewInPage/ReviewInPage.css'
const Review = (props) => {
    const {name,image,details,ratings} = props.review
    return (
        <div className='review-in-home-page'>
            <img src={image} alt="" />
            <h2>Name: <span className='style-set'>{name}</span> </h2>
            <p className='p-set'>Comment: <span className='style-set-p'>{details}</span> </p>
            <p className='p-set'>Ratings: <span className='style-set-ratings'>{ratings}</span> </p>
        </div>
    );
};

export default Review;