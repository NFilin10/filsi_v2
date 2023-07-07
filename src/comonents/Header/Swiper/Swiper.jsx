import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperComp(props) {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={props.images.image1} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">We are construction partners.</h3>
                        <h1 className="slider-text2">The Builders We Are The Best</h1>
                        <a className="slider-btn" href="#">Who we are</a>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.images.image2} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">We are construction partners.</h3>
                        <h1 className="slider-text2">The Builders We Are The Best</h1>
                        <a className="slider-btn" href="#">Who we are</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.images.image3} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">We are construction partners.</h3>
                        <h1 className="slider-text2">The Builders We Are The Best</h1>
                        <a className="slider-btn" href="#">Who we are</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
