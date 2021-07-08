import { Route, Switch } from "react-router";
import { url } from "../utilities/links";

function MainContent() {
    return(
        <div>
            <Switch>
                <Route exact path={url}>
                    landing
                </Route>
                <Route path={`${url}/about`}>
                    about
                </Route>
                <Route path={`${url}/projects`}>
                    projects
                </Route>
                <Route path={`${url}/sites`}>
                    sites
                </Route>
            </Switch>
        </div>
    )
}

export default MainContent