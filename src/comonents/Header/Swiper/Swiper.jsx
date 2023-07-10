import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function SwiperComp(props) {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={props.images.image1} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">Elektrifirma usaldusväärsed partnerid.</h3>
                        <h1 className="slider-text2">Ehitajad, kes teevad parimat tööd</h1>
                        <div className="slider-btn-wrapper">
                            <a className="slider-btn" href="#">Kes me oleme</a>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.images.image2} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">Avasta võimsad elektrilahendused meie ettevõttega.</h3>
                        <h1 className="slider-text2">Oleme ehitajad, kes loovad tuleviku</h1>
                        <div className="slider-btn-wrapper">
                            <a className="slider-btn" href="#">Kes me oleme</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.images.image3} alt=""/>
                    <div className="slider-info-wrapper">
                        <h3 className="slider-text1">Elektrifirma, mis pakub innovaatilisi lahendusi.</h3>
                        <h1 className="slider-text2">Meie ehitajad toovad teie ideed ellu</h1>
                        <div className="slider-btn-wrapper">
                            <a className="slider-btn" href="#">Kes me oleme</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
