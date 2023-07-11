import './Services.css'


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