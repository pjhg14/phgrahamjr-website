import { useEffect, useState } from "react"
import { useHistory, useParams, useRouteMatch } from "react-router"
import { projectURL } from "../../../utilities/links"

const sampleProject = {
    id: 1,
    title: "test",
    image: null,
    short_description: "A very short description",
    long_description: "A longer description going into the technologies used for this project",
    repo_url: "",
    video_url: "",
    live_url: "",
    priority: 5
}

function ProjectInfo() {
    const { id } = useParams()
    const { url } = useRouteMatch()
    const history = useHistory()
    const [project, setProject] = useState(sampleProject)
    const [loaded, setLoaded] = useState(false)
    
    // useEffect(() => {
    //     fetch(`${projectURL}`)
    //         .then(resp => resp.json())
    //         .then(queriedProject => {
    //             setProject(queriedProject)
    //             // setLoaded(true)
    //         })
    // },[id])
    
    // console.log({id, url, project})

    // if (!loaded) return <h1>Loading...</h1>

    const {title, long_description, repo_url, video_url, live_url } = project

    return(
        <main>
            <h1>{title + id}</h1>
            { !!video_url ?
                <iframe
                    className="demo-video"
                    src={video_url} 
                    title="Youtube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                :
                <img 
                    className="no-video"
                    width="560"
                    src="/assets/clapperboard.jpg" 
                    alt="No video found"
                />
            }
            {/*  */}
            <div className="links">
                <a className="main-link" href={live_url}>Live Website</a>
                |
                <a className="main-link" href={repo_url}>GitHub Repository</a>
            </div>
            
            <p>{long_description}</p>
            {/* Technologies */}
            <div>
                <button onClick={() => history.goBack()}>Back</button>
            </div>
        </main>
    )
}

export default ProjectInfo