import React from 'react';
import MicroFrontendReactApp from './components/MicroFrontendReactApp';
import MicroFrontendReactApp2 from './components/MicroFrontendReactApp2';
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";

import './assets/style.css';

const Header = () => (
    <nav className='navbar'>
        <ul>
            <li><Link to='/'>Home Shell</Link></li>
            <li><Link to='/microfrontend'>Home Microfrontend</Link></li>
            <li><Link to='/microfrontend/subroute'>Subroute Microfrontend</Link></li>
            <li><Link to='/microfrontend2'>Home Microfrontend 2</Link></li>
        </ul>
    </nav>
)

const Home = () => (<h1>Home Shell</h1>)

export default () => {
    const {pathname} = useLocation();
    const navigateShell = useNavigate();
    //const routes = [...MicroFrontendReactApp(), ...MicroFrontendReactApp2()];
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
                <Route path='/microfrontend/*' element={<MicroFrontendReactApp pathname={pathname} navigateShell={navigateShell} />} />
                <Route path='/microfrontend2/*' element={<MicroFrontendReactApp2 pathname={pathname} navigateShell={navigateShell} />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </React.Suspense>
    )
}