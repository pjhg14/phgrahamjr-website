import { motion } from "framer-motion";
import { pageTransition } from "../utilities/animationVariants";

export default function About(): JSX.Element {
    return(
        <motion.main 
            className="about"
            // variants={pageTransition}
            // initial="initial"
            // animate="animate"
            // exit="exit"
        >
            <header>
                <h2>About me</h2>
            </header>
            <section className="about-content"> 
                <section className="profile-card">
                    <div className="profile-card-content">
                        <div className="profile-card-front">
                            <img  src="/assets/PG-profile-pic.jpg" alt="card front"/>
                        </div>

                        <div className="profile-card-back">
                            <img src="/assets/Card-back.png" alt="card back"/>
                        </div>
                    </div>
                </section>
                <article className="summary">
                    <p>
                        I am a software developer specializing in the development of frontend, backend, and fullstack web applications 
                        as well as fullstack and monolithic desktop applications. 
                    </p>
                    <p>
                        I greatly enjoy the act of creating useful, in-depth applications that aid in the day to day for the end user 
                        and further enjoy the mitigation of menial tasks through efficient automation and other techniques
                    </p>
                    <p>
                        I have also graduated from Flatiron School and have my associates degree from Brookdale Community College.
                        With experience from both and my background in customer service, I strive to provide the best and brightest 
                        for those I work for and work with
                    </p> 
                </article>
            </section>
            <section className="languages">
                <h4>Languages and Frameworks I am proficient with:</h4>
                <p className="lang-list">
                    Java
                    JavaScript
                    HTML
                    CSS
                    Ruby
                    Rails
                    React
                    Node.js
                    MySQL
                    PostreSQL
                </p>
            </section>
        </motion.main>
    )
}