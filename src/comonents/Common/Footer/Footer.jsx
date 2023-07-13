import React from 'react'

import './Footer.css'
import logo from "../../../assets/logo.png";


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <a href='#home' className="logo"><img src={logo} alt=""/></a>
                <ul className="fast-links-list">
                    <li>
                        <a href='#home' >Esileht</a>
                    </li>
                    <li>
                        <a href='#home'>Teenused</a>
                    </li>
                    <li>
                        <a href='#home' >Tehtud too</a>
                    </li>
                    <li>
                        <a href='#home' >Firmast</a>
                    </li>
                    <li>
                        <a href='#home' >Meie tehnika</a>
                    </li>
                    <li>
                        <a href='#home' >Kontakt</a>
                    </li>
                </ul>

                <ul className="short-info">
                    <li>Männiku tee 102, Tallinn 11216</li>
                    <li> Tel./Fax +372 650 3023, Mobiil +372 501 2509</li>
                    <li> E-post: filsi@filsi.ee</li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer