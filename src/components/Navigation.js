import { useContext } from "react"
import { NavLink } from "react-router-dom"
import resume from "../resume/Paul_G_resume_ca2021.pdf";
import { NavContext } from "../utilities/context/NavContext";

function Navigation({ isDarkTheme, setIsDarkTheme }) {
    const { navActive, setNavActive } = useContext(NavContext)

    function toggleActive() {
        setNavActive(!navActive)
    }

    function toggleDarkTheme() {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <>
            <div className={`sidebar ${navActive ? "active" : ""}`}>
                <nav className="navigation">
                    <p className="nav-title">Menu</p>
                    <NavLink className="nav-button" to="/">
                        <i className="fas fa-home"></i>
                        <span>Title</span>
                    </NavLink>
                    <NavLink className="nav-button" to="/about">
                        <i className="far fa-address-card"></i>
                        <span>About</span>
                    </NavLink>
                    <NavLink className="nav-button" to="/projects">
                        <i className="fas fa-project-diagram"></i>
                        <span>Projects</span>
                    </NavLink>
                    <NavLink className="nav-button" to="/contacts">
                        <i className="far fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                    <a className="nav-button" href={resume} target="_blank" rel="noreferrer">
                        <i className="far fa-file-alt"></i>
                        <span>Resume</span>
                    </a>
                    <button className="nav-button theme" onClick={toggleDarkTheme}>
                        <span>{isDarkTheme ? "Light" : "Dark"}</span>
                    </button>
                </nav>
                <div className="nav-aside">
                    <button className="nav-tag" onClick={toggleActive}>
                        { navActive ? 
                            <i class="fas fa-angle-left"></i> 
                            : 
                            <i class="fas fa-angle-right"></i>
                        }
                    </button>
                </div>
            </div>
            <div className="nav-cover"></div>
        </>
        
    )
}

export default Navigation