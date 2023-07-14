import React from 'react'

import './Footer.css'
import logo from "../../../assets/logo.png";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <Link to='/' className="logo"><img src={logo} alt=""/></Link>
                <ul className="fast-links-list">
                    <li>
                        <Link to='/' >Esileht</Link>
                    </li>
                    <li>
                        <Link to='/teenused'>Teenused</Link>
                    </li>
                    <li>
                        <Link to='/projektid' >Tehtud too</Link>
                    </li>
                    <li>
                        <Link to='/meist' >Firmast</Link>
                    </li>
                    <li>
                        <Link to='/tehnika' >Meie tehnika</Link>
                    </li>
                    <li>
                        <Link to='/kontakt' >Kontakt</Link>
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