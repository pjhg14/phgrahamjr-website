import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ProjectPage";

export default function ProjectModal() {
    const { state, dispatch } = useContext(ModalContext)

    function handleClose(event) {
        dispatch({ type: "close" })
    }

    // console.log(state.project)
    
    if (state.isOpen) {
        return createPortal(
            <>
                <div className="overlay" onClick={handleClose} />
                <div className="modal">
                    <button className="modal-close" onClick={handleClose}>close</button>
                    <h1>{state.project.title}</h1>
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
                                className="no-video"
                                width="560"
                                src="/assets/clapperboard.jpg" 
                                alt="No video found"
                            />
                        )
                    }
                    {/* Date Completed */}
                    <div className="links">
                        <a className="main-link" href={state.project.live_url}>Live Website</a>
                        |
                        <a className="main-link" href={state.project.repo_url}>GitHub Repository</a>
                    </div>
                    
                    <p>{state.project.long_description}</p>
                    <p>Made With:</p>
                    {/* Technologies */}                    
                </div>
            </>,
            document.getElementById('portal')
        )
    } else {
        return null
    }

    
}