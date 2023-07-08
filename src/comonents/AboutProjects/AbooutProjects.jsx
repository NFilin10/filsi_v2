import React from 'react'
import About from './About/About'
import './AboutProjects.css'
import Projects from './Projects/Projects'

const AbooutProjects = () => {
    return (
        <div className="about-projects-wrapper">
            <div className="about-projects-content">
                <About/>
                <Projects/>
            </div>
        </div>
    )
}

export default AbooutProjects