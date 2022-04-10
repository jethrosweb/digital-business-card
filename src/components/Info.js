import React from "react"
import DisplayPic from "../pics/photo.jpg"

export default function Info(props) {
    return (
        <nav className={`info--container ${props.darkMode ? "dark" : ""}`}>

            <img src={DisplayPic} alt="Display Picture" className="info--picture" />

            <a className="info--theme__icon" onClick={props.toggleDarkMode}>
                <ion-icon name="contrast-outline"></ion-icon>
            </a>
            <a href="https://github.com/jethrosweb/digital-business-card" target="_blank" className="info--code__link">
                <ion-icon name="code-slash-outline"></ion-icon>
            </a>

            <h1>Jethro Dean</h1>

            <h4>Frontend Developer | JavaScript | React</h4>

            <a href="mailto: jethroldean@gmail.com" target="_blank" className="info--email__link">
                <span>
                    <ion-icon name="mail"></ion-icon>
                </span>
                <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/jethro-d/" target="_blank" className="info--linkedin__link">
                <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>LinkedIn</span>
            </a>

        </nav>

    )
}

