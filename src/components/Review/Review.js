import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name,image,details,ratings} = props.review
    return (
        <div className='review-in-home-page-another'>
            <img src={image} alt="" />
            <h2  className='set-clr-another'>Name: <span className='style-set-another'>{name}</span> </h2>
            <p className='p-set-another'>Comment: <span className='style-set-p-another'>{details}</span> </p>
            <p className='p-set-another'>Ratings: <span className='style-set-ratings-another'>{ratings}</span> </p>
        </div>
    );
};

export default Review;