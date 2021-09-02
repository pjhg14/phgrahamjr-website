import { useHistory, useRouteMatch } from "react-router-dom";

function ProjectCard({ project }) {
    const { url } = useRouteMatch()
    const history = useHistory()
    const { id, title, image, short_description} = project

    return(
        <div className="card" onClick={() => history.push(`${url}/${id}`)}>
            { !!image ? 
                <img className="card-img skele-bg" src={image} alt={`${title} project`} /> 
                : 
                <img className="card-img skele-bg" src="/assets/project-image-not-found.png" alt="default"/>
            }
            <div className="card-detail">
                <h2>{title}</h2>
                <p>{short_description}</p>
                {/* instead of repo link, will be short list of technologies used (~5)  */}
                <p className="tech-list">[tech1] [tech2] [tech3] [tech4] [tech5]</p>
            </div>
        </div>
    )
}

export default ProjectCard