import React from 'react';
import './ReviewInPage.css'

const ReviewInPage = ({review}) => {
    const {name,image,details,ratings} = review;
    return (
        <div className='review-in-home-page'>
            <img src={image} alt="" />
            <h2>Name: <span className='style-set'>{name}</span> </h2>
            <p className='p-set'>Comment: <span className='style-set-p'>{details}</span> </p>
            <p className='p-set'>Ratings: <span className='style-set-ratings'>{ratings}</span> </p>
        </div>
    );
};

export default ReviewInPage;