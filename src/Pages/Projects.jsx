import ProjectsGallery from "../comonents/Projects/ProjectsGallery/ProjectsGallery";

import {React} from 'react'

import Map from '../comonents/Projects/Map/Map'



const Projects = (props) => {

    return (

        <div>
            <ProjectsGallery state={props.state[0].projects}/>
            <Map/>
        </div>


    );
}

export default Projects