import React from "react"

export default function PopupMain(props) {
    return (
        <div className="popupMain--container">

            <div className="popupMain--header">

                <div>
                    <h5 className="popupMain--title">{props.item.title}</h5>
                    <p className="popupMain--date">Date Completed: {props.item.date}</p>
                </div>

                <div className="popupMain--links">
                    <a href={props.item.pageUrl} className="popupMain--site__link" target="_blank">
                        <ion-icon name="browsers-outline"></ion-icon>
                    </a>
                    <a href={props.item.codeUrl} target="_blank">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </a>
                </div>

            </div>

            <img src={props.item.imageSrc} className="popupMain--image" />

            <p className="popupMain--about"><span className="bold">About: </span>{props.item.about}</p>

            <p className="popupMain--languages">
                {props.item.html && <span className="popupMain--language__html"><ion-icon name="logo-html5"></ion-icon></span>}
                {props.item.css && <span className="popupMain--language__css"><ion-icon name="logo-css3"></ion-icon></span>}
                {props.item.scss && <span className="popupMain--language__scss"><ion-icon name="logo-sass"></ion-icon></span>}
                {props.item.javascript && <span className="popupMain--language__js"><ion-icon name="logo-javascript"></ion-icon></span>}
                {props.item.react && <span className="popupMain--language__react"><ion-icon name="logo-react"></ion-icon></span>}
            </p>

            <hr className="popupMain--line" />
            
        </div>
    )
}