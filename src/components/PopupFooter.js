import React from "react"

export default function PopupFooter(props) {
    return (
        <div className="popupFooter--container">
            <button onClick={props.closePopup}><ion-icon name="exit-outline"></ion-icon></button>
        </div>
    )
}