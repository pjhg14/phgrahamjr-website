import { useContext } from "react";
import { createPortal } from "react-dom";
import LinkButtonBar from "../../sub-components/LinkButtonBar";
import TechList from "../../sub-components/TechList";
import { ModalContext } from "./ProjectPage";

// Project Structure
// {
//     id: 1,
//     title: "test1",
//     short_description: "A very short description",
//     long_description: "A longer description going into the technologies used for this project",
//     completion_date: new Date("2021-09-14"),
//     repositories: [
//         {
//             id: 1,
//             host: "Github",
//             type: "Frontend",
//             link: ""
//         },
//         {
//             id: 2,
//             host: "Github",
//             type: "Backend",
//             link: ""
//         }
//     ],
//     requirements: [
//         {
//             id: 1,
//             requirement: ""
//         },
//         {
//             id: 2,
//             requirement: ""
//         },
//         {
//             id: 3,
//             requirement: ""
//         }
//     ],
//     technologies: [
//         {
//             id: 1,
//             name: "React"
//         },
//         {
//             id: 2,
//             name: "Rails"
//         },
//         {
//             id: 3,
//             name: "JavaScript"
//         }
//     ],
//     video_url: "",
//     live_url: "",
//     complexity: 3,
//     image: ""
// }

export default function ProjectModal() {
    const { state, dispatch } = useContext(ModalContext)

    function handleClose() {
        dispatch({ type: "close" })
    }
    
    if (state.isOpen) {
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
                    <LinkButtonBar repos={state.project.repositories} liveURL={state.project.live_url}/>
                    
                    <p>{state.project.long_description}</p>
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