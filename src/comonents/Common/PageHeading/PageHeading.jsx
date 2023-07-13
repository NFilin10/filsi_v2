import React from 'react'
import  "./PageHeading.css";


const PageHeading = (props) => {
    return(
        <div className="pageHeadingContent">
            <div className="pageHeading">
                <h1>
                    {props.state.upperHeading}
                    <br/>
                    {props.state.lowerHeading}
                </h1>
                <p>{props.state.supHeading}</p>
            </div>
        </div>

    )
}

export default PageHeading