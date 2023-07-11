import {useEffect, useState} from 'react'
import  styles from './Navbar.module.css';
import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom';

import {useLocation} from "react-router-dom";



function Navbar(props) {

    const [showNavbar, setShowNavbar] = useState(true)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/tehtud-projektid'){
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


        <nav className={styles.navbar} style={{position: !showNavbar ? 'relative' : '', backgroundColor: !showNavbar ? '#242424' : '', border: !showNavbar ? 'none' : ''}}>

            <div className={styles.nav_content}>
                <a href='#home' className={`${styles.logo}`}><img src={logo} alt=""/></a>


                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <Link to='#home' className={`${styles.navLink}`}>Esileht</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link to='/' className={`${styles.navLink}`}>Teenused</Link>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/tehtud-projektid' className={`${styles.navLink}`}>Tehtud too</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>Firmast</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>Meie tehnika</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>Kontakt</a>
                    </li>
                </ul>


                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;