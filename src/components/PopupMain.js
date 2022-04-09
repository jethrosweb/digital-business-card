import React from "react"

export default function PopupMain(props) {
    return (
        <div className="popup--pages">
            <div className="popup--pages__header">
                <div>
                    <h5 className="popup--pages__title">{props.item.title}</h5>
                    <p className="popup--pages__date">Date Completed: {props.item.date}</p>
                </div>
                <div className="popup--pages__links">
                    <a href={props.item.pageUrl} className="popup--pages__site" target="_blank">
                        <ion-icon name="browsers-outline"></ion-icon>
                    </a>
                    <a href={props.item.codeUrl} target="_blank">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </a>
                </div>
            </div>

            <img src={props.item.imageSrc} className="popup--pages__image" />

            <p className="popup--pages__about"><span className="bold">About: </span>{props.item.about}</p>

            <p className="popup--pages__languages">
                {props.item.html && <span className="popup--language__html"><ion-icon name="logo-html5"></ion-icon></span>}
                {props.item.css && <span className="popup--language__css"><ion-icon name="logo-css3"></ion-icon></span>}
                {props.item.javascript && <span className="popup--language__js"><ion-icon name="logo-javascript"></ion-icon></span>}
                {props.item.react && <span className="popup--language__react"><ion-icon name="logo-react"></ion-icon></span>}
            </p>
            <hr className="popupMain--line" />
        </div>
    )
}