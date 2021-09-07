import SkeletonCard from "../../sub-components/SkeletonCard";
import ProjectCard from "./ProjectCard";

const skeleProjects = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
]

function ProjectList({ projects }) {
    
    const projectCards = projects.map(project => {
        return <ProjectCard key={project.id} project={project} />
    })

    const skeleCards = skeleProjects.map(card => {
        return <SkeletonCard key={card.id} />
    })

    return(
        <div className="card-list">
            {projects.length === 0 ? skeleCards : projectCards}
        </div>
    )
}

export default ProjectList