import React from "react"
import logo from "../pics/jethros-web-logo-small.png"

export default function PopupHeader() {
    return (
        <div className="popupHeader--container">
            <img src={logo} className="popupHeader--logo" />
            <span className="popupHeader--title">Jethro's Web</span>
        </div>  
    )
}