import React from "react"
import PopupHeader from "./PopupHeader"
import PopupMain from "./PopupMain"
import PopupFooter from "./PopupFooter"
import data from "../popupData"


export default function Popup(props) {

    const popupMainElements = data.map(item => {
        return (
            <PopupMain 
                key = {item.id}
                item = {item}
            />
        )
    })

    function closePopup() {
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <div>
            <PopupHeader />
            <div className="popupMain">
                {popupMainElements}
            </div>
            <PopupFooter closePopup={closePopup} />
        </div>
    ) : ""
}