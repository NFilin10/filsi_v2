import React from 'react'

import './Partners.css'

import wegLogo from './../../assets/wegLogo.png'
import maruLogo from './../../assets/maruLogo.png'
import evrLogo from './../../assets/evrLogo.png'
import lwLogo from './../../assets/lwLogo.png'
import onninenLogo from './../../assets/onninenLogo.webp'
import esvikaLogo from './../../assets/esvikaLogo.png'
import lucidusLogo from './../../assets/lucidusLogo.png'
import esbLogo from './../../assets/esbLogo.png'
import harjuLogo from './../../assets/harjuLogo.png'
import stokkerLogo from './../../assets/stokkerLogo.png'
import melkerLogo from './../../assets/melkerLogo.png'


const Partners = () => {

    const partnersData = [
        {name:'WEG', logo: wegLogo},
        {name:'Maru', logo: maruLogo},
        {name:'EVR', logo: evrLogo},
        {name:'LW', logo: lwLogo},
        {name:'Onninen', logo: onninenLogo},
        {name:'Esvika', logo: esvikaLogo},
        {name:'Lucidus', logo: lucidusLogo},
        {name:'ESB', logo: esbLogo},
        {name:'Harju El.', logo: harjuLogo},
        {name:'Stokker', logo: stokkerLogo},
        {name:'Melker', logo: melkerLogo}

    ]

    let partnersElements = partnersData.map(partner =>
        <div className="partners">
            <img className="partner-logo" src={partner.logo} alt=""/>
            {/*<h3>{partner.name}</h3>*/}
        </div>
    )

    return (
        <div className="partners-wrapper">
            <div className="partners-content">
                <div className="partners-heading">
                    <h1>Our Partners</h1>
                </div>
                <div className="partners-list">
                    {partnersElements}
                </div>

            </div>
        </div>
    )
}

export default Partners