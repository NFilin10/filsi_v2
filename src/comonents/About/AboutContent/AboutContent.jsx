import React from 'react'
import Styles from './AboutConent.module.css'
import PageHeading from "../../Common/PageHeading/PageHeading";

const AboutContent = () => {
    return(
        <div className={Styles.abouWrapper}>
           <PageHeading/>
            <div className={Styles.aboutContent}>
                <div className={Styles.textInfo}>
                    <h2>
                        A RECOGNIZED LEADER IN ELECTRICAL CONSTRUCTION
                    </h2>
                    <p>
                        An industry leader for more than 130 years, MYR Group has helped shape our nation’s infrastructure by delivering some of the largest and most complex electrical transmission, commercial and industrial, and renewable energy projects. Our specialized expertise, skilled workforce, and innovative practices translate to successful project delivery for our clients. Through these efforts we’re supporting the clean energy transformation.
                    </p>
                </div>
                <div className={Styles.img}>
                    <img src="https://myrgroup.com/wp-content/uploads/2021/11/Leader-In-Construction-Anetelope-Juniper-2.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent