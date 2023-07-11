import React from 'react'
import About from './About/About'
import './AboutProjects.css'
import Projects from './Projects/Projects'

const AbooutProjects = (props) => {
    return (
        <div className="about-projects-wrapper">
            <div className="about-projects-content">
                <About/>
                <Projects state={props.state}/>
            </div>
        </div>
    )
}

export default AbooutProjects