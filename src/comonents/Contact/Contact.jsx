import React from 'react'
import Navbar from "../Home/Header/Navbar/Navbar";
import ContactContent from './ContactContent/ContactContent'
import ContactForm  from "./ContactForm/ContactForm";
import Styles from './Contact.module.css'
const Contact = (props) => {



    return(

        <div className={Styles.contactsWrapper}>
            <ContactContent state={props.state[0].contactInfo}/>
            <ContactForm/>

        </div>
    )
}
export default Contact