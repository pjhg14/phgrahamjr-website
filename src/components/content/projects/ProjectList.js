import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {

    const sortedProjects = projects.sort((projectA, projectB) => {
        return projectB.priority - projectA.priority
    })

    const projectCards = sortedProjects.map(project => {
        return <ProjectCard key={project.id} project={project} />
    })

    return(
        <main>
            <h2>A list of what I have done</h2>
            <div className="card-list">
                {projectCards}
            </div>
        </main>
    )
}

export default ProjectList