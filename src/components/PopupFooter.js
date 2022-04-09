import React from "react"

export default function PopupFooter(props) {
    return (
        <div className="popup--footer">
            <button onClick={props.closePopup}><ion-icon name="exit-outline"></ion-icon></button>
        </div>
    )
}