import { useContext } from "react";
import { ModalContext } from "./ProjectPage";

function ProjectCard({ project }) {
    const { dispatch } = useContext(ModalContext)
    const { title, image, short_description} = project

    function handleCardClick(event) {
        dispatch({
            type: "open",
            payload: project
        })
    }

    return(
        <div className="card" onClick={handleCardClick} onKeyDown={handleCardClick} tabIndex="0">
            { !!image ? 
                <img className="card-img skele-bg" src={image} alt={`${title} project`} /> 
                : 
                <img className="card-img skele-bg" src="/assets/project-image-not-found.png" alt="default"/>
            }
            <div className="card-detail">
                <h2>{title}</h2>
                <p>{short_description}</p>
                <p className="tech-list">[tech1] [tech2] [tech3] [tech4] [tech5]</p>
            </div>
        </div>
    )
}

export default ProjectCard