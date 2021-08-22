import { Route, Switch } from "react-router";
import ProjectPage from "./content/projects/ProjectPage";
import LandingPage from "./content/LandingPage";
import AboutPage from "./content/AboutPage";
import LinkPage from "./content/LinkPage";

function MainContent() {
    return(
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path={"/about"}>
                <AboutPage />
            </Route>
            <Route path={"/projects"}>
                <ProjectPage />
            </Route>
            <Route path={"/links"}>
                <LinkPage />
            </Route>
        </Switch>
    )
}

export default MainContent