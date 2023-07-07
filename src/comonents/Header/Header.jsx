import React from 'react'
import Navbar from "./Navbar/Navbar";
import Swiper1 from "./Swiper/Swiper";
import SwiperComp from "./Swiper/Swiper";
import slide1 from '../../assets/slide1.webp';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';




const Header = () => {

    const images = {
        image1: slide1,
        image2: slide2,
        image3: slide3
    }

    return (
        <div>
            <Navbar/>

            <SwiperComp images={images}/>
        </div>



    );
}


export default Header;