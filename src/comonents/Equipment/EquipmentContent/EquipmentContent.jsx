import React, {useEffect} from 'react'
import Popup from 'reactjs-popup';
import Styles from "./EquipmentContent.module.css";
import equipment from "../../../Pages/Equipment";
import 'reactjs-popup/dist/index.css';
import './PopupComp.css'
import {useLocation} from "react-router-dom";
import PageHeading from "../../Common/PageHeading/PageHeading";
import AOS from "aos";

const EquipmentContent = (props) => {


    const location = useLocation();

    // Check if the current URL matches the "/other" route
    const equipmentPage = location.pathname === '/tehnika';

    // Set the body background color based on the URL
    useEffect(() => {
        document.body.style.backgroundColor = equipmentPage ? '#2d2d2d' : 'white';

        // Clean up the effect when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [equipmentPage]);


    let equpmentElement = props.state.equipmentInfo.map(equipment =>


        <Popup trigger=
                   {<div className={Styles.equipment} data-aos="fade-down" data-aos-duration="1800">
                       <img className={Styles.equipmentImg} src={equipment.equipmentImg} alt=""/>
                       <div className={Styles.equipmentDescription}>
                           <div className={Styles.equipmentName}>{equipment.equipmentName}</div>
                       </div>
                   </div>}
               modal nested>
            {
                close => (
                    <div className={Styles.modal}>
                        <div className={Styles.content}>
                            <img className={Styles.equipmentImgModal} src={equipment.equipmentImg} alt=""/>
                            <div className={Styles.equipmentDescriptionModal}>
                                <div>{equipment.equipmentName}</div>
                                <p>{equipment.equipmentDesc}</p>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <button onClick=*/}
                        {/*                {() => close()}>*/}
                        {/*        Close modal*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                )
            }
        </Popup>


    )

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={Styles.equipmentsContainer}>
            <PageHeading state={props.state.pageInfoEquipment[0]}/>
            <div className={Styles.equipments}>
                {equpmentElement}
            </div>

        </div>
    )
}

export default EquipmentContent