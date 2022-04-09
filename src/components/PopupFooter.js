import React from "react"

export default function PopupFooter(props) {
    return (
        <div className="popup--footer">
            <button onClick={props.closePopup}>Exit</button>
        </div>
    )
}