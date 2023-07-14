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
                    <p>
                        Filsi OÜ on Eesti elektrifirma, asutatud 1997. aastal. Me tegeleme elektrimontaažitöödega, pakkudes välisvõrkude ehitust, sisetöid, kontaktvõrgu ehitust, kaevetöid, alajaamade ehitust, käit, projekteerimist ja ehitustöid. Filsi OÜ-l on suur tehnika park ning olulised projektid hõlmavad Kakumäe Sadamat, Module Tech'i, Eesti Traati ja Favorit. Meie oleme tuntud professionaalse teeninduse poolest, pakkudes usaldusväärseid elektritöid ja tagades elektrisüsteemide ohutuse ning usaldusväärsuse.
                    </p>
                    <button className={Styles.allProjectsBtn}>Kõik projektid</button>
                </div>
            </div>
        </div>
    )
}

export default About