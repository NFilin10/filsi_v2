import {useEffect, useState} from 'react'
import  Styles from './Navbar.module.css';
import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom';

import {useLocation} from "react-router-dom";



function Navbar(props) {

    const [showNavbar, setShowNavbar] = useState(true)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/tehtud-projektid' || location.pathname === '/teenused'){
            setShowNavbar(false)
        }
    }, [location])



    // adding the states
    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };


    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }



    return (


        <nav className={Styles.navbar} style={{position: !showNavbar ? 'relative' : '', backgroundColor: !showNavbar ? '#242424' : '', }}>

            <div className={Styles.nav_content}>
                <a href='/' className={`${Styles.logo}`}><img src={logo} alt=""/></a>


                <ul className={`${Styles.navMenu} ${isActive ? Styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <Link to='/' className={`${Styles.navLink}`}>Esileht</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/teenused' className={`${Styles.navLink}`}>Teenused</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/tehtud-projektid' className={`${Styles.navLink}`}>Tehtud too</Link>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${Styles.navLink}`}>Firmast</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${Styles.navLink}`}>Meie tehnika</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${Styles.navLink}`}>Kontakt</a>
                    </li>
                </ul>


                <div className={`${Styles.hamburger} ${isActive ? Styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                    <span className={`${Styles.bar}`}></span>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;