import React from 'react';
import './Home.css'
import ReviewsInPage from '../ReviewsInPage/ReviewsInPage'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className='product-details'>
                <div className='writings'>
                    <h1>BEST LAPTOP EVER <br /> <span>BUY YOUR LAPTOP NOW!!</span></h1>
                    <p>The HP Elite Dragonfly Max is a beautifully designed 2 in 1 laptop that provides a stunning collaboration experience with AI-driven crystal-clear audio and a high definition display. Drive productivity with a powerful Intel® Core™ processor[1], a Wi-Fi 6[2] connection, strong security, and privacy features.</p>
                    <button className='btn-style'>LIVE DEMO</button>
                </div>
                <div className='image-style'>
                    <img src="https://www.hp.com/us-en/shop/app/assets/images/product/2L4H0AV_MB/center_facing.png?_=1638007577867&imwidth=270&imdensity=1" alt="" />
                </div>
            </div>
            <ReviewsInPage></ReviewsInPage>
            <Footer></Footer>
        </div>
    );
};

export default Home;