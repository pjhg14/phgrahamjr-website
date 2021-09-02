import SkeletonCard from "../../sub-components/SkeletonCard";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {

    const sortedProjects = projects.sort((projectA, projectB) => {
        return projectB.priority - projectA.priority
    })

    const projectCards = sortedProjects.map(project => {
        return <ProjectCard key={project.id} project={project} />
    })

    const skeleCards = projects.map(project => {
        return <SkeletonCard key={project.id} />
    })

    return(
        <main>
            <h1>A list of what I have done</h1>
            <div className="filter-bar">
                <label htmlFor="filter">Filter By:</label>
                <select id="filter" name="filter" >
                    <option>None(No specific order)</option>
                    <option>Date</option>
                    <option>Complexity</option>
                </select>
                <button className="direction toggle">Asc/Desc</button>
            </div>
            <div className="card-list">
                {/* {skeleCards} */}
                {projectCards}
            </div>
        </main>
    )
}

export default ProjectList