import { useContext } from "react";
import { ModalContext } from "./ProjectPage";

function ProjectCard({ project }) {
    const { dispatch } = useContext(ModalContext)
    const { title, image, short_description, completion_date, priority } = project

    function handleCardClick() {
        dispatch({
            type: "open",
            payload: project
        })
    }

    return(
        <div className="project-card" onClick={handleCardClick} onKeyDown={handleCardClick} tabIndex="0">
            <div className="project-card-content">
                <div className="project-card-front">
                    { !!image ? 
                        <img className="card-img skele-bg" src={image} alt={`${title} project`} /> 
                        : 
                        <img className="card-img skele-bg" src="/assets/project-image-not-found.png" alt="default"/>
                    }
                    <h3>{title}</h3>
                    <p>complexity: {priority}</p>
                    <p>Completed: {completion_date.toUTCString()}</p>
                </div>
                <div className="project-card-back">
                    <p>{short_description}</p>
                    <p className="tech-list">[tech1] [tech2] [tech3] [tech4] [tech5]</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

/*
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
*/