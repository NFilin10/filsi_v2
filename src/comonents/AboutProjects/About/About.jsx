import React from 'react'
import './About.css'

const About = () => {
    return(
        <div className="about-content">
            <div className="heading-section">
                <h6>
                    <span>01</span>
                    featured projects
                </h6>
                <h2>OVER A CENTURY OF CONNECTING POWER TO PEOPLE</h2>
            </div>
            <div className="about-section">
                <div className="about-section-content">
                    <p className="about-text">An industry leader for more than 130 years, MYR Group has helped shape our nation’s infrastructure by delivering some of the largest and most complex electrical transmission, commercial and industrial, and renewable energy projects. Our specialized expertise, skilled workforce, and innovative practices translate to successful project delivery for our clients. Through these efforts we’re supporting the clean energy transformation.</p>
                    <button className="all-projects-btn">view all projects</button>
                </div>
            </div>
        </div>
    )
}

export default About