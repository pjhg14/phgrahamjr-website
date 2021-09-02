import { useEffect, useState } from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import ProjectList from "./ProjectList"
import ProjectInfo from "./ProjectInfo";
import { projectURL } from "../../../utilities/links";

const sampleProjects = [
    {
        id: 1,
        title: "test1",
        image: null,
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 5
    },
    {
        id: 2,
        title: "test2",
        image: null,
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 5
    },
    {
        id: 3,
        title: "test3",
        image: null,
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 4
    },
    {
        id: 4,
        title: "test4",
        image: null,
        short_description: "A very short description",
        long_description: "A longer description going into the technologies used for this project",
        repo_url: "",
        video_url: "",
        live_url: "",
        priority: 2
    }
]



export default function ProjectPage() {
    const [projects, setProjects] = useState(sampleProjects)
    const { path } = useRouteMatch()

    useEffect(() => {
        // get actual list of projects
        // fetch(projectURL)
        //     .then(resp => resp.json())
        //     .then(queriedProjects => {
        //         setProjects(queriedProjects)
        //     })
    },[])

    

    return(
        <Switch>
            <Route exact path={path}>
                <ProjectList projects={projects}/>
            </Route>
            <Route path={`${path}/:id`}>
                <ProjectInfo />
            </Route>
        </Switch>
    )
}