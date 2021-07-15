import { useState } from "react"
import { Route, Switch, useRouteMatch } from "react-router"
import ProjectList from "./ProjectList"
import ProjectInfo from "./ProjectInfo";
// import { url } from "../../utilities/links";

function ProjectPage() {
    const [projects, setProjects] = useState([])
    const { path } = useRouteMatch()

    console.log(path)

    return(
        <Switch>
            <Route exact path={path}>
                <ProjectList projects={projects}/>
            </Route>
            <Route path={`${path}/:id`}>
                <ProjectInfo/>
            </Route>
        </Switch>
    )
}

export default ProjectPage