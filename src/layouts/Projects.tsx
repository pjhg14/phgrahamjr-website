import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import Modal from "../components/Modal";
import ProjectInfo from "../components/ProjectInfo";
import ProjectList from "../components/ProjectList"
import { pageTransition } from "../utilities/animationVariants";
import { ModalContextProvider } from "../utilities/context/ModalContext";
// import { projectURL } from "../../../utilities/links";

const initialProjects = [
    {
        id: 1,
        title: "Loo-Review",
        short_description: "A compendium of user-curated restrooms around the New York City area",
        long_description: "Loo-Review provides a list of restrooms provided by a server in which the user can review information related to said restroom. Along with that, the user will be able to leave comments on the desired restroom as well as suggest new restrooms to be added to the database",
        completion_date: new Date("2021-04-23"),
        repositories: [
            {
                id: 1,
                host: "GitHub",
                type: "Frontend",
                link: "https://github.com/pjhg14/Phase-2-rr-location-frontend"
            },
            {
                id: 2,
                host: "GitHub",
                type: "Backend",
                link: "https://github.com/pjhg14/rr-locator-backend"
            }
        ],
        requirements: [],
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "JavaScript"
            },
            {
                id: 3,
                name: "Node.js"
            }
        ],
        video_url: "",
        live_url: "https://loo-review.netlify.app/",
        complexity: 2,
        image: "assets/loo_review_main_page.png"
    },
    {
        id: 2,
        title: "Nerd-Space",
        short_description: "A compendium of user-curated comics and discussion threads",
        long_description: "NerdSpace will allow users to review comics, find new comics, and join groups to discuss with other users",
        completion_date: new Date("2021-05-14"),
        repositories: [
            {
                id: 1,
                host: "GitHub",
                type: "Frontend",
                link: "https://github.com/pjhg14/ns-frontend"
            },
            {
                id: 2,
                host: "GitHub",
                type: "Backend",
                link: "https://github.com/jbrundagejr/phase-3-ruby-group-project-rack-react"
            }
        ],
        requirements: [],
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "JavaScript"
            },
            {
                id: 3,
                name: "Node.js"
            },
            {
                id: 4,
                name: "Ruby"
            },
            {
                id: 5,
                name: "Rack"
            }
        ],
        video_url: "",
        live_url: "",
        complexity: 3,
        image: "assets/ns-comic-page.png"
    },
    {
        id: 3,
        title: "Career-Pad",
        short_description: "A career based note taking application",
        long_description: "A web application that allows the user to keep track of their job hunting experience by logging applications, contacts related to those applications, current and future experience, etc.",
        completion_date: new Date("2021-06-26"),
        repositories: [
            {
                id: 1,
                host: "GitHub",
                type: "Frontend",
                link: "https://github.com/pjhg14/phase5-project-frontend"
            },
            {
                id: 2,
                host: "GitHub",
                type: "Backend",
                link: "https://github.com/pjhg14/phase5-project-backend"
            }
        ],
        requirements: [],
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "JavaScript"
            },
            {
                id: 3,
                name: "Node.js"
            },
            {
                id: 4,
                name: "Ruby"
            },
            {
                id: 6,
                name: "Rails"
            }
        ],
        video_url: "",
        live_url: "",
        complexity: 3,
        image: "assets/career-pad-dashboard.png"
    },
    {
        id: 4,
        title: "JScribble",
        short_description: "An online drawing application",
        long_description: "A web application that allows the user to draw on a canvas board. The creations can then be downloaded onto their computer or, once signed or logged in, can be uploaded for the public to see",
        completion_date: new Date("2021-11-23"),
        repositories: [
            {
                id: 1,
                host: "GitHub",
                type: "Frontend",
                link: "https://github.com/pjhg14/JScribble-frontend"
            },
            {
                id: 2,
                host: "GitHub",
                type: "Backend",
                link: "https://github.com/pjhg14/JScribble-backend"
            }
        ],
        requirements: [],
        technologies: [
            {
                id: 1,
                name: "React"
            },
            {
                id: 2,
                name: "JavaScript"
            },
            {
                id: 3,
                name: "Node.js"
            },
            {
                id: 4,
                name: "Ruby"
            },
            {
                id: 6,
                name: "Rails"
            }
        ],
        video_url: "",
        live_url: "https://jscribble.netlify.app/",
        complexity: 3,
        image: "assets/JScribble-landing.png"
    }
]

export default function Project(): JSX.Element {
    const [ projects ] = useState(initialProjects)
    // const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState("none")
    const [isAsc, setIsAsc] = useState(true)

    useEffect(() => {
        // get actual list of projects
        // fetch(projectURL)
        //     .then(resp => resp.json())
        //     .then(queriedProjects => {
        //         // if no image replace empty string with default image 
        //         setProjects(queriedProjects)
        //     })
    },[])

    const sortedProjects = projects.sort((projectA, projectB) => {
        switch (filter) {
            case "date":
                return ( isAsc ? 
                    projectA.completion_date.getTime() - projectB.completion_date.getTime() 
                    : 
                    projectB.completion_date.getTime() - projectA.completion_date.getTime()
                )
            case "complexity":
                return isAsc ? projectA.complexity - projectB.complexity : projectB.complexity - projectA.complexity
            default:
                return isAsc ? projectA.id - projectB.id : projectB.id - projectA.id
        }
    })

    return(
        <ModalContextProvider>
            <motion.main 
                className="projects"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Modal>
                    <ProjectInfo />
                </Modal>
                <h2>A list of what I have done</h2>
                <div className="filter-bar">
                    <label htmlFor="filter">Filter By:</label>
                    <select id="filter" name="filter" onChange={e => setFilter(e.target.value)}>
                        <option value="none">Default</option>
                        <option value="date">Date Completed</option>
                        <option value="complexity">Complexity</option>
                    </select>
                    <button 
                        className={`direction-toggle ${isAsc ? "ascending" : "descending"}`} 
                        onClick={() => setIsAsc(!isAsc)}
                    >
                        {isAsc ? "ASC" : "DEC"}
                    </button>
                </div>
                <ProjectList projects={sortedProjects}/>
            </motion.main>
        </ModalContextProvider>
    )
}