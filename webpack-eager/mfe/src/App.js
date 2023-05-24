import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const ProductLazy = React.lazy(() => import("./pages/Product"));
const HomeLazy = React.lazy(() => import("./pages/Home"));


export default ({ history, basename }) => {
    return <div>
        <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
        
            <Switch>

                <Route path={`${basename}/product`} component={ProductLazy} />
                <Route path={`${basename}/`} component={HomeLazy} />
            </Switch>
            <br />
            <Link to={`/`}>Home Shell</Link>
            <br />
            <Link to={`${basename}/product`}>Product</Link>
            <br />
            <Link to={`${basename}/`}>Home</Link>
            </React.Suspense>
        </Router>
    </div>
}