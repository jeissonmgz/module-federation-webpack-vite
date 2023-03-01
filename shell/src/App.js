import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/comprar'>home</Link><br />
        <Link to='/comprar/react'>use react</Link>
    </div >
)

export default () => {
    return (
        <BrowserRouter history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/comprar' component={HelloReactApp} />
            </Switch>
        </BrowserRouter>
    )
}