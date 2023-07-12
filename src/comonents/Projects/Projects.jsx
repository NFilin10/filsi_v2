import Navbar from "../Home/Header/Navbar/Navbar";
import ProjectsGallery from "./ProjectsGallery/ProjectsGallery";

import {React} from 'react'

import Map from './Map/Map'


import  Styles from './Projects.module.css'

const Projects = (props) => {

    return (

        <div className={Styles.doneProjects}>

            <Navbar/>

            <ProjectsGallery state={props.state[0].projects}/>
            <Map/>
        </div>


    );
}

export default Projects