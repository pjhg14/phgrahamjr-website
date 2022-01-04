import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <main className="landing centered">
            <header>
                <h1 className="main-title">My name is</h1>
                <h1 className="name-title">Paul Graham Jr.</h1>
                <h2 className="sub-title">Welcome to my website</h2>
            </header>

            <nav>
                <Link to="/about">about</Link>
                |
                <Link to="/projects">projects</Link>
                |
                <Link to="/contacts">contact</Link>
            </nav>
        </main>
    )
}