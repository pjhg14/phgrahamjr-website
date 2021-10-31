export default function TechList({ className, techs }) {
    // TODO: Render tech logo with name string
    const techList = techs.map(tech => tech.name).join(', ')
    
    return(
        <div className={className}>
            {techList}
        </div>
    )
}