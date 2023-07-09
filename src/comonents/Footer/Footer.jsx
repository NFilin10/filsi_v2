import React from 'react'

import './Footer.css'
import logo from "../../assets/logo.png";


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <a href='#home' className="logo"><img src={logo} alt=""/></a>
                <ul className="fast-links-list">
                    <li>
                        <a href='#home' >Home</a>
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
                        <a href='#home' >Kontakt</a>
                    </li>
                </ul>

                <ul className="short-info">
                    <li>Järvevana tee 5, 10112 Tallinn, Eesti</li>
                    <li>Telefon +372 650 8800, Faks +372 650 8801</li>
                    <li>Registrikood 10037062, KMKR EE100271878</li>
                    <li>E-post info@maru.ee</li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer