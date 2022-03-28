import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"

export default function App() {
    return (
        <div className="app--main__container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}