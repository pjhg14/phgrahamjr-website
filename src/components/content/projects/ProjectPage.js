import { createContext, useEffect, useReducer, useState } from "react"
import ProjectList from "./ProjectList"
import { projectURL } from "../../../utilities/links";
import ProjectModal from "./ProjectModal";

// Modal State -------------------------------------------------------------------------/
export const ModalContext = createContext()

const initialState = {
    project: null,
    isOpen: false
}

function modalReducer(state, action) {
    switch (action.type) {
        case "open":
            // opens modal and displays provided project
            return {
                ...state,
                project: action.payload,
                isOpen: true
            }
        case "close":
            // closes modal and clears current project
            return {
                ...state,
                project: null,
                isOpen: false
            }
        
        default:
            return state;
    }
}
// -------------------------------------------------------------------------------------/

const sampleProjects = [
    {
        id: 1,
        title: "test1",
        image: "",
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        completion_date: new Date("2020-03-25"),
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 1
    },
    {
        id: 2,
        title: "test2",
        image: "",
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        completion_date: new Date("2012-03-25"),
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 5
    },
    {
        id: 3,
        title: "test3",
        image: "",
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        completion_date: new Date("2018-03-25"),
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 4
    },
    {
        id: 4,
        title: "test4",
        image: "",
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        completion_date: new Date("2021-03-25"),
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 2
    }
]

export default function ProjectPage() {
    const [projects, setProjects] = useState(sampleProjects)
    // const [projects, setProjects] = useState([])
    const [state, dispatch] = useReducer(modalReducer, initialState)
    const [filter, setFilter] = useState("")
    const [isAsc, setIsAsc] = useState(true)

    useEffect(() => {
        // get actual list of projects
        // fetch(projectURL)
        //     .then(resp => resp.json())
        //     .then(queriedProjects => {
        //         setProjects(queriedProjects)
        //     })
    },[])

    const sortedProjects = projects.sort((projectA, projectB) => {
        switch (filter) {
            case "date":
                return isAsc ? projectA.completion_date - projectB.completion_date : projectB.completion_date - projectA.completion_date
            case "complexity":
                return isAsc ? projectA.priority - projectB.priority : projectB.priority - projectA.priority
            default:
                return isAsc ? projectA.id - projectB.id : projectB.id - projectA.id
        }
    })

    return(
        <ModalContext.Provider value={{
            state,
            dispatch
        }}>
            <main className="projects">
                <ProjectModal />
                <h2>A list of what I have done</h2>
                <div className="filter-bar">
                    <label htmlFor="filter">Filter By:</label>
                    <select id="filter" name="filter" onChange={e => setFilter(e.target.value)}>
                        <option value="none">Unfiltered</option>
                        <option value="date">Date Completed</option>
                        <option value="complexity">Complexity</option>
                    </select>
                    <button 
                        className={`direction-toggle ${isAsc ? "ascending" : "descending"}`} 
                        onClick={() => setIsAsc(!isAsc)}
                    >
                        {isAsc ? "ASC" : "DESC"}
                    </button>
                </div>
                <ProjectList projects={sortedProjects}/>
            </main>
        </ModalContext.Provider>
    )
}