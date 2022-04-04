import React from 'react';

const ReviewInPage = ({review}) => {
    const {name,details,ratings} = review;
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Comment: {details}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewInPage;