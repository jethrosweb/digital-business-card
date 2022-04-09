import React from "react"
import logo from "../pics/jethros-web-logo.png"

export default function PopupHeader() {
    return (
        <div className="popup--header">
            <img src={logo} className="popup--header__logo" />
            <span className="popup--header__title">Jethro's Web</span>
        </div>  
    )
}