import React from "react"
import latrobe from "../pics/latrobe.png"
import melbuni from "../pics/melbuni.png"
import academyxi from "../pics/academyxi.png"

export default function Main(props) {
    return (
        <main className={`main--container ${props.darkMode ? "dark" : ""}`}>

            <div>
                <h3 className="main--title">About:</h3>
                <p className="main--text">Junior Web Developer with a Bachelor of Arts (Deans List) and Bachelor of Business, 14 years in customer service, sales and operations management having managed teams up to 25 people. Currently training at Academy Xi in front end web development in addition to self-study to develop coding skills in HTML, CSS, JavaScript, and React.
                </p>
            </div>

            <div className="main--images">
                <img src={latrobe} />
                <img src={melbuni} />
                <img src={academyxi} />
            </div>

            <div>
                <h3 className="main--title">Available!</h3>
                <p className="main--text">Frontend developer currently seeking employment with a company that has strong values as well as an emphasise on continued skill and professional progression. If you want to connect or know more about me, reach out via any of the following links found on this digital business card.</p>
            </div>

            <p className="main--prompt__text">See my work below</p>
            
        </main>
    )
}