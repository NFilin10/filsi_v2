import Navbar from "../Home/Header/Navbar/Navbar";
import ProjectsGallery from "./ProjectsGallery/ProjectsGallery";

import {React} from 'react'

import Map from './Map/Map'


import './Projects.css'

const Projects = (props) => {

    return (

        <div className="done-projects">

            <Navbar/>
            <Map/>
            <ProjectsGallery state={props.state[0].projects}/>
        </div>


    );
}

export default Projects