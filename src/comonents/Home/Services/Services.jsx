import Styles from './Services.module.css'
import './ServicesCarousel.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Services = (props) => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


    let serviceElements = props.state.map(service =>
        <div className={Styles.serviceWrapper}>
            <div className={Styles.serviceImage}>
                <img src={service.serviceImg} onDragStart={handleDragStart} role="presentation" />
            </div>
            <div className={Styles.serviceText}>
                <span className={Styles.serviceNum}>0{service.id}</span>
                <h6 className={Styles.serviceHeading}>{service.serviceName}</h6>
                <p className={Styles.serviceDescription}>{service.serviceDescription}</p>
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