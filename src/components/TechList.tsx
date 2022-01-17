import { Technology } from "../utilities/interfaces"

interface PropTypes {
    className?: string,
    techs?: Technology[]
}

export default function TechList({ className, techs }: PropTypes): JSX.Element | null {

    if (!techs) return null 

    // TODO: Render tech logo with name string
    const techList = techs.map(tech => tech.name).join(', ')
    
    return(
        <div className={className}>
            {techList}
        </div>
    )
}