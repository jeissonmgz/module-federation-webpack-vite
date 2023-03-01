import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const HelloReact = React.lazy(() => import("./pages/Product"));
const HelloWorld = React.lazy(() => import("./pages/Home"));


export default ({ history, basename }) => {
    return <div>
        <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
        
            <Switch>

                <Route path={`${basename}/react`} component={HelloReact} />
                <Route path={`${basename}/`} component={HelloWorld} />
            </Switch>
            <br />
            <Link to={`${basename}/react`}>Product</Link>
            <br />
            <Link to={`${basename}/`}>Home</Link>
            </React.Suspense>
        </Router>
    </div>
}