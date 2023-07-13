import React from 'react'
import Navbar from "../comonents/Common/Navbar/Navbar";
import ContactContent from '../comonents/Contact/ContactContent/ContactContent'
import ContactForm  from "../comonents/Contact/ContactForm/ContactForm";
const Contact = (props) => {



    return(

        <div>
            <ContactContent state={props.state[0].contactInfo}/>
            <ContactForm/>

        </div>
    )
}
export default Contact