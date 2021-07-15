import { useParams, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"

function ProjectInfo(params) {
    const { id } = useParams()
    const { url } = useRouteMatch() 
    // useffect for selected project
    
    console.log( {id, url })

    return(
        <div>
            <p>YouTube Link</p>
            <p>info</p>
            <p>Website Link (if applicable)</p>
            <p>Github link</p>
            <Link to={'/phgrahamjr-website/projects'}>back</Link>
        </div>
    )
}

export default ProjectInfo