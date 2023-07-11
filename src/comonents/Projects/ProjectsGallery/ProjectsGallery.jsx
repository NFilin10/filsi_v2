import React, {useEffect, useState} from 'react'

import './ProjectsGallery.css'
import kakumaeSadam from "../../../assets/kakumaeSadam.jpg";
import {useLocation} from "react-router-dom";

const ProjectsGallery = (props) => {

    const [imgSize, setImgSize] = useState(true)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/tehtud-projektid'){
            setImgSize(false)
        }
    }, [location])

    const [noOfElement, setnoOfElement] = useState(3);
    const loadMore = () => {
        console.log(noOfElement + noOfElement)
        if (noOfElement + noOfElement >= props.state.length) {
            const btn = document.querySelector(".button-wrapper")
            btn.style.display = "none"
            const gallery = document.querySelector(".project-photos")
            gallery.style.marginBottom = "120px"

        }
        setnoOfElement(noOfElement + noOfElement)
    }
    const slice = props.state.slice(0, noOfElement)


    let projectElements = slice.map(project =>
        <div className="project">
            <img className="service-img object-img"  src={project.img}  alt=""/>
            <div className="project-name" >{project.name}</div>
        </div>
    )

    return (
        <div className="projects-gallery-container">
            <div className="projects-gallery-content">
                <div className="projects-heading">
                    <h1>
                        tehtud
                        <br/>
                        projektid
                    </h1>
                    <p>Avaldage projektid, mis aitasid ehitada vastupanuvõimelisi ja usaldusväärseid ühendusi</p>

                </div>
            </div>
            <div className="project-photos-wrapper">
                <div className="project-photos" >
                    {projectElements}
                </div>
                <div className="button-wrapper">
                    <button className="all-projects-btn" onClick={() => loadMore()}>KUVA ROHKEM</button>
                </div>
            </div>


        </div>
    )
}

export default ProjectsGallery