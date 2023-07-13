import React from 'react'
import Navbar from "../Home/Header/Navbar/Navbar";
import SpecProjectContent from "./SpecProjectContent/SpecProjectContent";


const SpecProject = (props) => {
    return (
        <div>
            <Navbar/>
            <SpecProjectContent state={props.state[0].projects[props.id]}/>
        </div>
    )
}
export default SpecProject