import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function LinkPage() {
    return(
        <main>
            {/* TODO: replace "site:" with image */}
            <h2>Find me here</h2>
            <section>
                <a className="vis-link" href="https://www.linkedin.com/in/pgrahamjr" target="_blank" rel="noreferrer">
                    <span className="icon-span"><FaLinkedin className="icon" /></span>
                    <span>https://www.linkedin.com/in/pgrahamjr/</span>
                </a>
                <a className="vis-link" href="https://github.com/pjhg14" target="_blank" rel="noreferrer">
                    <span className="icon-span"><FaGithub className="icon"/></span>
                    <span>https://github.com/pjhg14</span>
                </a>
                <p className="vis-link">
                    <span className="icon-span"><SiGmail className="icon" /></span>
                    <span>pjhg14@gmail.com</span>
                </p>
                <form className="email-form">
                    <label className="form-label" htmlFor="name">Name / Email</label>
                    <input id="name" className="form-input" type="text"/>

                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input id="subject" className="form-input" type="text"/>

                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" className="form-input" />

                    <input type="submit" />
                </form>
            </section>
        </main>
    )
}