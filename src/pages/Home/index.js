import styles from './home.module.css'
import Slider from './Slider/Slider'
import MainProduct from './MainProduct';
import MainNewProduct from './MainNewProduct';
import React from 'react';
import IntroEliteProduct from './IntroEliteProduct';
import BackgroundFashion from './BackgroundFashion';
import News from './News';
import FindShop from './FindShop';
import FeedBack from './FeedBack';

function Home(){
    return (
        <React.Fragment>
            <Slider />
            <MainProduct />
            <MainNewProduct />
            <IntroEliteProduct />
            <BackgroundFashion />
            <News />
            <FeedBack />
            <FindShop />
        </React.Fragment>
    )
}

export default Home;