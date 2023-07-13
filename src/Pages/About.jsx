import React from 'react'
import AboutContent from "../comonents/About/AboutContent/AboutContent";
import Navbar from "../comonents/Common/Navbar/Navbar";

const About = (props) => {
    return(
        <div>
           <AboutContent state={props.state[0]}/>
        </div>
    )
}

export default About