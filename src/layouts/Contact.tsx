import { motion } from "framer-motion";
import { pageTransition } from "../utilities/animationVariants";

export default function Contact(): JSX.Element {
    return(
        <motion.main
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2>Find me here</h2>
            <section className="links">
                <a className="contact-link redirecting" href="https://www.linkedin.com/in/pgrahamjr" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                    https://www.linkedin.com/in/pgrahamjr/
                </a>
                <a className="contact-link redirecting" href="https://github.com/pjhg14" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                    https://github.com/pjhg14
                </a>
                <p className="contact-link">
                    <i className="fas fa-envelope"></i>
                    paulhgrahamjr@gmail.com
                </p>
            </section>
            {/* TODO: Email Form 
                Possibly ask whether to open email form or to open default email manager
            */}
            {/* 
                <form className="email-form">
                    <label className="form-label" htmlFor="name">Name / Email</label>
                    <input id="name" className="form-input" type="text"/>

                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input id="subject" className="form-input" type="text"/>

                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" className="form-input" />

                    <input type="submit" />
                </form> 
            */}
        </motion.main>
    )
}