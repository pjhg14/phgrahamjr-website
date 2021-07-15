import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return(
        <div>
            ProjectList
            <div className="card-list">
                <ProjectCard project={{}} />
            </div>
            
            <NavLink to="project/1"></NavLink>
        </div>
    )
}

export default ProjectList