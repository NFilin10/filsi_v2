import React from 'react'

import Styles from './Partners.module.css'



const Partners = (props) => {


    let partnersElements = props.state.map(partner =>
        <div className={Styles.partners}>
            <img className={Styles.partnerLogo} src={partner.logo} alt=""/>
            {/*<h3>{partner.name}</h3>*/}
        </div>
    )

    return (
        <div className={Styles.partnersWrapper}>
            <div className={Styles.partnersContent}>
                <div className={Styles.partnersHeading}>
                    <h1>Meie Partnerid</h1>
                </div>
                <div className={Styles.partnersList}>
                    {partnersElements}
                </div>

            </div>
        </div>
    )
}

export default Partners