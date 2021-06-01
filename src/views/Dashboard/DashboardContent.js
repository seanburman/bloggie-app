import { Route, Switch } from "react-router";
import Blog from "../Blog/Blog";
import Images from "../Images/Images";

export default function DashboardContent() {
    return (
        <div className="flex-col__dashboard-content">
            <Switch>
                <Route exact path={`/Dashboard`}>
                <Blog />
                </Route>
                <Route exact path={`/Dashboard/Images`}>
                    <Images />
                </Route>
                <Route exact path={`/Dashboard/Settings`}>
                Settings
                </Route>
                <Route exact path={`/Dashboard/Embed`}>
                Embed
                </Route>
                <Route path={`*`}>
                <Blog />
                </Route>
            </Switch>
        </div>
    )
}