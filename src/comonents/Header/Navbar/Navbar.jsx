import { useState } from 'react'
import  styles from './Navbar.module.css';
import logo from './../../../assets/logo.png'



function Navbar() {


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
        <div className="App">
            <header className="App-header">


                <nav className={`${styles.navbar}`}>

                    <div className={styles.nav_content}>
                        <a href='#home' className={`${styles.logo}`}><img src={logo} alt=""/></a>


                        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Esileht</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Teenused</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Tehtud too</a>
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

                    {/* logo */}

                </nav>


            </header>
        </div>
    );
}


export default Navbar;