import React from 'react'
import Styles from './About.module.css'

const About = () => {
    return(
        <div className={Styles.aboutContent}>
            <div className={Styles.headingSection}>
                <h6>
                    Suurimad projektid
                </h6>
                <h2>ÜLE <span>25 AASTA</span> OLEME <span>TEIE</span> USALDUSVÄÄRNE ELEKTRIFIRMA</h2>
            </div>
            <div className={Styles.aboutSection}>
                <div className={Styles.aboutSectionContent}>
                    <p>An industry leader for more than 130 years, MYR Group has helped shape our nation’s infrastructure by delivering some of the largest and most complex electrical transmission, commercial and industrial, and renewable energy projects. Our specialized expertise, skilled workforce, and innovative practices translate to successful project delivery for our clients. Through these efforts we’re supporting the clean energy transformation.</p>
                    <button className={Styles.allProjectsBtn}>Kõik projektid</button>
                </div>
            </div>
        </div>
    )
}

export default About