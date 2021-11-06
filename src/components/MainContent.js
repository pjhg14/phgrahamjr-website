import { Route, Switch } from "react-router";
import ProjectPage from "./content/projects/ProjectPage";
import LandingPage from "./content/LandingPage";
import AboutPage from "./content/AboutPage";
import ContactPage from "./content/ContactPage";

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
                <ContactPage />
            </Route>
        </Switch>
    )
}

export default MainContent