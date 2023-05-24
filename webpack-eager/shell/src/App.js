import React from 'react';
import MicroFrontendReactApp from './components/MicroFrontendReactApp';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
    <Link to='/'>Home Shell</Link><br />
    <Link to='/microfrontend'>Home Microfrontend</Link><br />
    <Link to='/microfrontend/subroute'>Subroute Microfrontend</Link>
    </div >
)

const Home = () => (<h1>Hola, soy una shell</h1>)

export default () => {
    return (
        <BrowserRouter history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/microfrontend' component={MicroFrontendReactApp} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}