import React from 'react'
import Navbar from "../comonents/Common/Navbar/Navbar";
import ServicesContent from '../comonents/Services/ServicesContent/ServicesContent'

const Services = (props) => {



    return(

        <div>
            <ServicesContent state={props.state[0].services}/>
        </div>
    )
}
export default Services