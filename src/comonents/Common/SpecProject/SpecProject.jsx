import React from 'react'
import Navbar from "../Navbar/Navbar";
import SpecProjectContent from "./SpecProjectContent/SpecProjectContent";
import {useParams} from "react-router-dom";


const SpecProject = (props) => {

    const params = useParams()

    let id = 0
    for (const object of props.state) {
        console.log(object)
        if (object.url === params.id){
            break
        }
        id++
    }


    return (
        <div>
            <SpecProjectContent state={props.state[id]}/>
        </div>
    )
}
export default SpecProject