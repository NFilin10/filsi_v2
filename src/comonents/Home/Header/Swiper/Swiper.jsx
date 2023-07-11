
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function SwiperComp(props) {
    let swiperElement = props.state.map(slide =>
        <SwiperSlide>
            <img src={slide.img} alt=""/>
            <div className="slider-info-wrapper">
                <h3 className="slider-text1">{slide.text1}</h3>
                <h1 className="slider-text2">{slide.text2}</h1>
                <div className="slider-btn-wrapper">
                    <a className="slider-btn" href="#">{slide.btnText}</a>
                </div>
            </div>

        </SwiperSlide>
    )

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
                {swiperElement}
            </Swiper>
        </>
    );
}
