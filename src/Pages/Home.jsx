import Header from "../comonents/Home/Header/Header"
import Services from '../comonents/Home/Services/Services'
import AboutProjects from '../comonents/Home/AboutProjects/AbooutProjects'
import Partners from '../comonents/Home/Partners/Partners'
import {useLocation} from "react-router-dom";
import React, {useEffect} from 'react'

function Home(props) {

    const location = useLocation();

    // Check if the current URL matches the home page
    const isHomePage = location.pathname === '/';

    // Set the body background color based on the URL
    // eslint-disable-next-line no-undef
    useEffect(() => {
        document.body.style.backgroundColor = isHomePage ? 'white' : '#2d2d2d';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [isHomePage]);

    return (
        <div className="homeWrapper">
            <Header state={props.state[0].swiper}/>
            <Services  state={props.state[0].services}/>
            <AboutProjects state={props.state[0].projects}/>
            <Partners state={props.state[0].partners}/>
        </div>
    );
}

export default Home;
