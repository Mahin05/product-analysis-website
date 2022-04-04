import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div>
            <h2 className='cust-clr'>What our customers say!!</h2>
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