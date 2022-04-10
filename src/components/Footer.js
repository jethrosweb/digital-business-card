import React from "react"

export default function Footer(props) {
    return (
        <div className={`footer--container ${props.darkMode ? "dark" : ""}`}>
            
            <a href="https://github.com/jethrosweb" target="_blank" className="footer--github__link">
                <span>
                    <ion-icon name="logo-github"></ion-icon>
                </span>
                <span>GitHub</span>
            </a>

            <a className="footer--pages__popup" onClick={props.openPopup}>
                <span>
                    <ion-icon name="logo-github"></ion-icon>
                </span>
                <span>Pages</span>
            </a>

        </div>
    )
}