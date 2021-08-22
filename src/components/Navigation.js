import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navigation() {
    const [active, setActive] = useState(false)

    return(
        <div className={`sidebar ${active ? "active" : ""}`}>
            <nav className="navigation">
                <p className="nav-title">Menu</p>
                <NavLink className="nav-button" exact to="/">
                    {/* image? here */}
                    <span>Title</span>
                </NavLink>
                <NavLink className="nav-button" to="/about">
                    
                    <span>About</span>
                </NavLink>
                <NavLink className="nav-button" to="/projects">
                    <span>Projects</span>
                </NavLink>
                <NavLink className="nav-button" to="/links">
                    <span>Links</span>
                </NavLink>
            </nav>
            <div className="nav-aside">
                <button className="nav-tag" onClick={() => setActive(!active)}>
                    {active ? "<" : ">"}
                </button>
            </div>
        </div>
        
    )
}

export default Navigation