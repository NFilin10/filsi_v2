
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Styles from './Swiper.module.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SwiperComp.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import {Link} from "react-router-dom";

export default function SwiperComp(props) {
    let swiperElement = props.state.map(slide =>
        <SwiperSlide>
            <img src={slide.img} alt=""/>
            <div className={Styles.sliderInfowWapper}>
                <h3 className={Styles.sliderText1}>{slide.text1}</h3>
                <h1 className={Styles.sliderText2}>{slide.text2}</h1>
                <div className={Styles.sliderBtnWrapper}>
                    <Link className={Styles.sliderBtn} to="/meist">{slide.btnText}</Link>
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
