import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const SubrouteLazy = React.lazy(() => import("./pages/Subroute"));
const HomeLazy = React.lazy(() => import("./pages/Home"));


export default ({ history, basename }) => {
    return <div>
        <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
        
            <Switch>

                <Route path={`${basename}/subroute`} component={SubrouteLazy} />
                <Route path={`${basename}/`} component={HomeLazy} />
            </Switch>
            <hr />
            <Link to={`/`}>Home Shell</Link>|
            <Link to={`${basename}/`}>Home Microfrontend</Link> |
            <Link to={`${basename}/subroute`}>Subroute Microfrontend</Link>
            </React.Suspense>
        </Router>
    </div>
}