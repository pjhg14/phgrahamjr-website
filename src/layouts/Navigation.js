import { useState } from "react"
import { NavLink } from "react-router-dom"
import resume from "../resume/Paul_G_resume_ca2021.pdf";

function Navigation({ isDarkTheme, setIsDarkTheme }) {
    const [active, setActive] = useState(false)

    function toggleActive() {
        setActive(!active)
    }

    function toggleDarkTheme() {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <div className={`sidebar ${active ? "active" : ""}`}>
            <nav className="navigation">
                <p className="nav-title">Menu</p>
                <NavLink className="nav-button" to="/">
                    {/* image? here */}
                    <span>Title</span>
                </NavLink>
                <NavLink className="nav-button" to="/about">
                    <span>About</span>
                </NavLink>
                <NavLink className="nav-button" to="/projects">
                    <span>Projects</span>
                </NavLink>
                <NavLink className="nav-button" to="/contacts">
                    <span>Contact</span>
                </NavLink>
                <a className="nav-button" href={resume} target="_blank" rel="noreferrer">
                    <span>Resume</span>
                </a>
                <button className="nav-button theme" onClick={toggleDarkTheme}>
                    <span>{isDarkTheme ? "Light" : "Dark"}</span>
                </button>
            </nav>
            <div className="nav-aside">
                <button className="nav-tag" onClick={toggleActive}>
                    {active ? "<" : ">"}
                </button>
            </div>
        </div>
        
    )
}

export default Navigation