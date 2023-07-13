import React from 'react'
import EquipmentContent from "../comonents/Equipment/EquipmentContent/EquipmentContent";

const Equipment = (props) => {
    return(
        <div>
            <EquipmentContent state={props.state[0]}/>
        </div>
    )
}

export default Equipment