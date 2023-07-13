import React from 'react'
import Styles from "../Contact/Contact.module.css";
import Navbar from "../Home/Header/Navbar/Navbar";
import EquipmentContent from "./EquipmentContent/EquipmentContent";

const Equipment = (props) => {
    return(
        <div className={Styles.equipmentWrapper}>
            <Navbar/>
            <EquipmentContent state={props.state[0].equipmentInfo}/>
        </div>
    )
}

export default Equipment