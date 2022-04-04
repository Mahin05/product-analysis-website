import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div>
            <h2>What our customers say!!</h2>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            
        </div>
    );
};

export default Reviews;