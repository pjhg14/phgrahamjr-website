import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function LinkPage() {
    return(
        <main>
            {/* TODO: replace "site:" with image */}
            <h2>Find me here</h2>
            <section className="contact-links">
                <a className="vis-link" href="https://www.linkedin.com/in/pgrahamjr" target="_blank" rel="noreferrer">
                    <span className="icon-span">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                    </span>
                    <span>https://www.linkedin.com/in/pgrahamjr/</span>
                </a>
                <a className="vis-link" href="https://github.com/pjhg14" target="_blank" rel="noreferrer">
                    <span className="icon-span">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </span>
                    <span>https://github.com/pjhg14</span>
                </a>
                <p className="vis-link">
                    <span className="icon-span">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    </span>
                    <span>paulhgrahamjr@gmail.com</span>
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