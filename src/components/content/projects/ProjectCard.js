import { useHistory, useRouteMatch } from "react-router-dom";

function ProjectCard({ project }) {
    const { url } = useRouteMatch()
    const history = useHistory()
    const { id, title, image, short_description, repo_url } = project

    return(
        <div className="card debug" onClick={() => history.push(`${url}/${id}`)}>
            { !!image ? 
                <img className="card-img" src={image} alt={`${title} project`} /> 
                : 
                <img className="card-img" src="/assets/project-image-not-found.png" alt="default"/>
            }
            <div className="card-detail">
                <h3>{title}</h3>
                <p>{short_description}</p>
                <a href={repo_url}>GitHub</a>
            </div>
        </div>
    )
}

export default ProjectCard