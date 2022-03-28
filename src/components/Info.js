import React from "react"
import DisplayPic from "../images/photo.jpg"

export default function Info() {
    return (
        <nav className="info--nav__container">
            <img src={DisplayPic} alt="Display Picture" className="info--picture" />
            <h1>Jethro Dean</h1>
            <h4>Frontend Developer</h4>
            <a className="info--email__link">
                <span>
                    <ion-icon name="mail"></ion-icon>
                </span>
                <span>Email</span>
            </a>
            <a className="info--linkedin__link">
                <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>LinkedIn</span>
            </a>
        </nav>

    )
}

