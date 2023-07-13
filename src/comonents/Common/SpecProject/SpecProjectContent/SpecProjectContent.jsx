import React from 'react'
import Styles from './SpecProjectContent.module.css'

const SpecProjectContent = (props) => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.header}>
                <h1>{props.state.name}</h1>
                <h3>SOme data</h3>
            </div>
            <div className={Styles.projectImg}>
                <img src={props.state.img}
                     alt=""/>
            </div>
            <div className={Styles.content}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="2"><h2>{props.state.name}</h2></th>
                    </tr>
                    </thead>
                    <tbody className={Styles.tableBody}>
                        <tr>
                            <td className={Styles.label}>Client</td>
                            <td>{props.state.client}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Completion Date</td>
                            <td>{props.state.finishDate}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Location</td>
                            <td>{props.state.location}</td>
                        </tr>
                        <tr>
                            <td className={Styles.label}>Completed by</td>
                            <td>{props.state.completedBy}</td>
                        </tr>
                    </tbody>
                </table>
                <p className={Styles.projectInfo}>
                    {props.state.projectDescription}
                </p>
            </div>

        </div>
    )
}

export default SpecProjectContent