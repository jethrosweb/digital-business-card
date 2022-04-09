import React from "react"

export default function Main(props) {
    return (
        <main className={`main--container ${props.darkMode ? "dark" : ""}`}>
            <div>
                <h3 className="main--title">About</h3>
                <p className="main--text">Junior Web Developer with a Bachelor of Arts (Deans List) and Bachelor of Business, 14 years in customer service, sales and operations management having managed teams up to 25 people. Currently training at Academy Xi in front end web development in addition to self-study to develop coding skills in HTML, CSS, JavaScript, and React.
                </p>
            </div>
            <div>
                <h3 className="main--title">Interests</h3>
                <p className="main--text">I have a new found passion for front end web development and am thoroughly enjoying learning to develop stylish web sites using HTML, CSS, Javascript and React. In my free time I train Brazilian Jiu Jitsu and keep fit using an indoor rower. I also enjoy learning new tricks on the Affinity Suite and reading a good book!</p>
            </div>
        </main>
    )
}