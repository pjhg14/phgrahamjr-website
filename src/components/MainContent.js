import { Route, Switch } from "react-router";

function MainContent() {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    landing
                </Route>
                <Route path="/about">
                    about
                </Route>
                <Route path="/projects">
                    projects
                </Route>
                <Route path="/sites">
                    sites
                </Route>
            </Switch>
        </div>
    )
}

export default MainContent