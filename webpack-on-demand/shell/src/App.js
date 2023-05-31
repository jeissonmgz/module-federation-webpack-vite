import React from 'react';
import MicrofrontendApp from './components/MicrofrontendApp';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>Home Shell</Link> |
        <Link to='/microfrontend'>Home Microfrontend</Link> |
        <Link to='/microfrontend/subroute'>Subroute Microfrontend</Link>
    </div>
)

const Home = () => (<h1>Shell webpack-on-demand</h1>)

export default () => {
    return (
        <BrowserRouter history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/microfrontend' component={MicrofrontendApp} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}