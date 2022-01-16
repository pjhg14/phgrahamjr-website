import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition } from "../utilities/animationVariants";
import resume from "../resume/Paul_G_resume_ca2021.pdf";

export default function LandingPage(): JSX.Element {
    return(
        <motion.main 
            className="landing centered"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <aside className="theme-toggle">
                <i className={`fas fa-sun`}></i>
            </aside>
            <header>
                <h1 className="main-title">My name is</h1>
                <h1 className="name-title">Paul Graham Jr.</h1>
                <h2 className="sub-title">Welcome to my website</h2>
            </header>

            <nav className="landing-nav">
                <Link className="landing-link" to="/about">About</Link>
                <Link className="landing-link" to="/projects">Projects</Link>
                <Link className="landing-link" to="/contacts">Contact</Link>
                <a className="landing-link" href={resume} target="_blank" rel="noreferrer">
                    Resume
                </a>
            </nav>
        </motion.main>
    )
}