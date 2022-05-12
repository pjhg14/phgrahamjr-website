import { useContext } from "react"
import { ModalContext } from "../utilities/context/ModalContext"
import LinkButtonBar from "./LinkButtonBar"
import TechList from "./TechList"

export default function ProjectInfo() {
    const { state } = useContext(ModalContext)

    if (!state.project) return null

    return(
        <div className="project-info">
            <h2>{state.project.title}</h2>
            { !!state.project.video_url ? (
                    <iframe
                        className="demo-video"
                        src={state.project.video_url} 
                        title="Youtube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <img 
                        className="video-fallback"
                        width="560"
                        src={state.project.image} 
                        alt="project"
                    />
                )
            }
            {/* Date Completed */}
            <LinkButtonBar repos={state?.project.repositories} liveURL={state.project.live_url}/>
            
            <p>{state.project.long_description}</p>
            <p>Made With:</p>
            <TechList techs={state.project.technologies}/>
        </div>
    )
}