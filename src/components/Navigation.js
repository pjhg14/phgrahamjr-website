import { NavLink } from "react-router-dom"
import { url } from "../utilities/links"

function Navigation() {
    return(
        <nav>
            <NavLink className="nav-button" exact to={url}>Landing</NavLink>
            |
            <NavLink className="nav-button" to={`${url}/about`}>About</NavLink>
            |
            <NavLink className="nav-button" to={`${url}/projects`}>Projects</NavLink>
            |
            <NavLink className="nav-button" to={`${url}/sites`}>Sites</NavLink>
        </nav>
    )
}

export default Navigation