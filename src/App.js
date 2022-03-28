import React from "react"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Main from "./components/Main"

export default function App() {
    return (
        <div className="app--main__container">
            <Info />
            <Main />
            <Footer />
        </div>
    )
}