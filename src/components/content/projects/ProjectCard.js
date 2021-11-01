import { useContext } from "react";
import TechList from "../../sub-components/TechList";
import { ModalContext } from "./ProjectPage";

export default function ProjectCard({ project }) {
    const { dispatch } = useContext(ModalContext)
    const { title, image, short_description, technologies, completion_date, complexity } = project

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
                    <p>complexity: {complexity}</p>
                    <p>Completed: {toNormalizedDate(completion_date)}</p>
                </div>
                <div className="project-card-back">
                    <p>{short_description}</p>
                    <TechList className="card-techs" techs={technologies}/>
                </div>
            </div>
        </div>
    )
}

function toNormalizedDate(date) {
    return date.toDateString().split(" ").slice(1).join(" ")
}

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