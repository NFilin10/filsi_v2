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
        {id: 1, serviceName: "Välisvõrkude ehitus", serviceDescription: "See teenus hõlmab elektrivõrkude rajamist ja hooldust välitingimustes, tagades elektrienergia leviku piirkonnas või territooriumil.", serviceImg: service1},
        {id: 2, serviceName: "Sisetööd", serviceDescription: "Selle teenusega tegeletakse elektrisüsteemide paigaldamise, remondi ja hooldusega hoonetes ja struktuurides, et tagada ohutu ja usaldusväärne elektrivarustus.", serviceImg: service2},
        {id: 3, serviceName: "Kontaktvõrgu ehitus", serviceDescription: "See teenus hõlmab kontaktliinide või elektriliinide ehitamist, mille abil elektrienergia edastatakse ühendatud seadmetele ja klientidele.", serviceImg: service3},
        {id: 4, serviceName: "Kaevetööd", serviceDescription: "Kaevetööd hõlmavad maapinna kaevamist ja töötlemist, et paigaldada elektrikaablid, torustikud või muud seadmed elektrivõrguga seotud projekte ja rajatisi vajavate tööde jaoks.", serviceImg: service4},
        {id: 5, serviceName: "Alajaamade ehitus", serviceDescription: " See teenus hõlmab alajaamade rajamist, mis on olulised elektrivarustuse jaotamiseks ning energia muundamiseks ühendatud piirkondadele ja klientidele.", serviceImg: service5},
        {id: 6, serviceName: "Käit", serviceDescription: "Käituteenus hõlmab elektrisüsteemide ja seadmete järelevalvet, hooldust, remonti ja optimeerimist, et tagada nende tõrgeteta toimimine ja pikaajaline usaldusväärsus.", serviceImg: service6},
        {id: 7, serviceName: "Projekteerimine", serviceDescription: "Projekteerimisteenus hõlmab kohandatud elektrisüsteemide planeerimist ja kavandamist vastavalt klientide vajadustele, arvestades ohutuse, tõhususe ja energiasäästlikkuse põhimõtteid.", serviceImg: service7},
        {id: 8, serviceName: "Ehitustööd", serviceDescription: "Ehitusteenus hõlmab elektriinfrastruktuuri ehitamist, sealhulgas elektrisüsteemide, kaablite, juhtmete ja muude seadmete paigaldamist vastavalt projektidele ja ehitusstandarditele.", serviceImg: service8},
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