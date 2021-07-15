import { Link, useRouteMatch } from "react-router-dom";

function ProjectCard(project) {
    const { url } = useRouteMatch() 
    // console.log(url)

    return(
        <div className="debug">
            project image here
            <h3>Project Header</h3>
            <p>Short Project Description</p>
            <p>Repo Link</p>
            <Link to={`${url}/1`}>info</Link>
        </div>
    )
}

export default ProjectCard