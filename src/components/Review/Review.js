import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name,details,ratings} = props.review
    return (
        <div className='review-style'>
            <h4>Name: {name}</h4>
            <p>Comment: {details}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default Review;