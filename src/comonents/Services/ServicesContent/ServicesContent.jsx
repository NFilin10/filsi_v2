import React, {useEffect} from 'react'
import Styles from './ServicesContent.module.css'
import {useLocation} from "react-router-dom";
import PageHeading from "../../Common/PageHeading/PageHeading";
import AOS from "aos";

const ServicesContent = (props) => {


    const location = useLocation();

    // Check if the current URL matches the "/other" route
    const servicePage = location.pathname === '/teenused';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = servicePage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [servicePage]);


    let servicesElement = props.state.services.map(service =>

        <div className={Styles.service} data-aos="flip-up"  data-aos-duration="1500">
            <img className={Styles.serviceImg} src={service.serviceImg} alt=""/>
            <div className={Styles.serviceDescription}>
                <h3>{service.serviceName}</h3>
                <ul>
                    {
                        service.shortDesc.map(sDesc => <li>{sDesc}</li>)
                    }
                </ul>
            </div>

        </div>
    )

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(

        <div className={Styles.servicesContainer}>
            <PageHeading state={props.state.pageInfoServices[0]}/>
            <div className={Styles.services}>
                {servicesElement}
            </div>

        </div>

    )
}

export default ServicesContent