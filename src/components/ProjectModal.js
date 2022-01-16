import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../utilities/context/ModalContext";
import LinkButtonBar from "./LinkButtonBar";
import TechList from "./TechList";

export default function ProjectModal() {
    const { state, dispatch } = useContext(ModalContext)

    function handleClose() {
        dispatch({ type: "close" })
    }
    
    if (state.visible) {
        return createPortal(
            <>
                <div className="overlay" onClick={handleClose} />
                <div className="modal">
                    <button className="modal-close" onClick={handleClose}>close</button>
                    <h2>{state.project.title}</h2>
                    { !!state.project.video_url ? (
                            <iframe
                                className="demo-video"
                                src={state.project.video_url} 
                                title="Youtube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
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
                    
                    <p>{state?.project.long_description}</p>
                    <p>Made With:</p>
                    <TechList techs={state.project.technologies}/>               
                </div>
            </>,
            document.getElementById('portal')
        )
    } else {
        return null
    }

    
}