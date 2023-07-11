import React from 'react'



import './Projects.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = (props) => {

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

    let projectElements = props.state.map(project =>
        <div className="project">
            <img className="service-img" src={project.img} alt=""/>
            <div className="project-name">{project.name}</div>
        </div>
    )

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
                {projectElements}
            </Carousel>
        </div>
    )
}

export default Projects
