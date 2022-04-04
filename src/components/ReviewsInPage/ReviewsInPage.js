import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewInPage from '../../components/ReviewInPage/ReviewInPage'
import { Link, useNavigate } from 'react-router-dom';


const ReviewsInPage = () => {
    const [reviews,setReviews]= useReviews()
    const slicedReviews = reviews.slice(0,3);
    // const navigate = useNavigate();
    // const showAllReview = () => {
    //     const path = `/reviews/`;
    //     navigate(path);
    // }  
    return (
        <div>
            <h2>Customers review ({slicedReviews.length})</h2>
            {
                slicedReviews.map(review => <ReviewInPage
                key={review.id}
                review={review}
                ></ReviewInPage>)
            }
            <button><Link to='/reviews'>See All Reviews</Link></button>
        </div>
    );
};

export default ReviewsInPage;