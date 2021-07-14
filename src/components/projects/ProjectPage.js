import { useState } from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import ProjectList from "./ProjectList"

function ProjectPage(params) {
    const [projects, setProjects] = useState([])
    const {path, url} = useRouteMatch()

    console.log(path)

    return(
        <Switch>
            <Route path={path}>
                <ProjectList projects={projects}/>
            </Route>
            <Route path={`${path}/info/:id`}>
                <ProjectInfo/>
            </Route>
        </Switch>
    )
}

export default ProjectPage