import React from 'react'

import './Partners.css'



const Partners = (props) => {


    let partnersElements = props.state.map(partner =>
        <div className="partners">
            <img className="partner-logo" src={partner.logo} alt=""/>
            {/*<h3>{partner.name}</h3>*/}
        </div>
    )

    return (
        <div className="partners-wrapper">
            <div className="partners-content">
                <div className="partners-heading">
                    <h1>Meie Partnerid</h1>
                </div>
                <div className="partners-list">
                    {partnersElements}
                </div>

            </div>
        </div>
    )
}

export default Partners