import { NavLink } from "react-router-dom"

function Navigation() {
    return(
        <nav>
            <NavLink className="nav-button" exact to="/">Landing</NavLink>
            |
            <NavLink className="nav-button" to="/about">About</NavLink>
            |
            <NavLink className="nav-button" to="/projects">Projects</NavLink>
            |
            <NavLink className="nav-button" to="sites">Sites</NavLink>
        </nav>
    )
}

export default Navigation