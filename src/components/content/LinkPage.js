import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function LinkPage() {
    return(
        <main>
            {/* TODO: replace "site:" with image */}
            <h2>Find me here</h2>
            <section>
                <p className="vis-link">
                    <FaLinkedin className="icon" /> https://www.linkedin.com/in/pgrahamjr/
                </p>
                <p className="vis-link">
                    <FaGithub className="icon"/> https://github.com/pjhg14
                </p>
                <p className="vis-link">
                    <SiGmail className="icon" /> pjhg14@gmail.com
                    {/* name/email  */}
                    {/* subject */}
                    {/* message */}
                    {/* send button */}
                </p>
            </section>
        </main>
    )
}