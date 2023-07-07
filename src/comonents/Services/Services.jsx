import './Services.css'

import service1 from './../../assets/service1.jpg'
import service2 from './../../assets/service2.jpg'
import service3 from './../../assets/service3.jpg'
import service4 from './../../assets/service4.jpg'
import service5 from './../../assets/service5.jpg'
import service6 from './../../assets/service6.jpg'
import service7 from './../../assets/service7.png'
import service8 from './../../assets/service8.jpg'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import s1 from './../../assets/slide1.webp';
import s2 from './../../assets/slide2.jpg';
import s3 from './../../assets/slide3.jpg';

const Services = () => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const serviceData = [
        {id: 1, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service1},
        {id: 2, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service2},
        {id: 3, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service3},
        {id: 4, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service4},
        {id: 5, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service5},
        {id: 6, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service6},
        {id: 7, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service7},
        {id: 8, serviceName: "valisvorkude ehitus", serviceDescription: "Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up", serviceImg: service8},
    ]

    let serviceElements = serviceData.map(service =>
        <div className="service-wrapper">
            <div className="service-image">
                <img src={service.serviceImg} onDragStart={handleDragStart} role="presentation" />
            </div>
            <div className="service-text">
                <span className="service-num">0{service.id}</span>
                <h6 className="service-heading">{service.serviceName}</h6>
                <p className="service-description">{service.serviceDescription}</p>
            </div>
        </div>
    )


    return(
        <AliceCarousel
            mouseTracking items={serviceElements}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    );
};


export default Services