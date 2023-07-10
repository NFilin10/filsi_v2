import React from 'react'

import s from './../../../assets/service7.png'

import kakumaeSadam from './../../../assets/kakumaeSadam.jpg'
import moduleTech from './../../../assets/moduleTech.jpg'
import eestiTraat from './../../../assets/eestiTraat.jpg'
import favor from './../../../assets/favor.jpg'

import './Projects.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className="projects-wrapper">
            <h3 className="project-section-heading">Vaata, mida me oleme võimelised</h3>
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                // infinite={true}
                // autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >


                <div className="project">
                    <img className="service-img" src={kakumaeSadam} alt=""/>
                    <div className="project-name">Kakumäe Sadam</div>
                </div>
                <div className="project">
                    <img className="service-img" src={moduleTech} alt=""/>
                    <div className="project-name">Module Tech</div>
                </div>
                <div className="project">
                    <img className="service-img" src={eestiTraat} alt=""/>
                    <div className="project-name">Eesti Traat</div>
                </div>
                <div className="project">
                    <img className="service-img" src={favor} alt=""/>
                    <div className="project-name">Favor</div>
                </div>
            </Carousel>
        </div>
    )
}

export default Projects
