import React from 'react'
import Navbar from "../Home/Header/Navbar/Navbar";
import ServicesContent from './ServicesContent/ServicesContent'

const Services = (props) => {



    return(

        <div>
            <Navbar/>
            <ServicesContent state={props.state[0].services}/>
        </div>
    )
}
export default Services