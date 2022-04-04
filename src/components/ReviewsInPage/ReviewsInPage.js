import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewInPage from '../../components/ReviewInPage/ReviewInPage'
import { Link } from 'react-router-dom';
import './ReviewsInPage.css'


const ReviewsInPage = () => {
    const [reviews,setReviews]= useReviews()
    const slicedReviews = reviews.slice(0,3);
    return (
        <div className='revie-in-page-style'>
            <h2>Customers review ({slicedReviews.length})</h2>
            {
                slicedReviews.map(review => <ReviewInPage
                key={review.id}
                review={review}
                ></ReviewInPage>)
            }
            <button className='btn-style-set'><Link className='link-style' to='/reviews'>See All Reviews</Link></button>
        </div>
    );
};

export default ReviewsInPage;