import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
    return(
        <main>
            <h2>Find me here</h2>
            <section className="links">
                <a className="contact-link redirecting" href="https://www.linkedin.com/in/pgrahamjr" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon linkedin" icon={faLinkedin}/>
                    https://www.linkedin.com/in/pgrahamjr/
                </a>
                <a className="contact-link redirecting" href="https://github.com/pjhg14" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    https://github.com/pjhg14
                </a>
                <p className="contact-link">
                    <FontAwesomeIcon className="icon gmail" icon={faEnvelope} />
                    paulhgrahamjr@gmail.com
                </p>
            </section>
            {/* TODO: Email Form */}
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
        </main>
    )
}