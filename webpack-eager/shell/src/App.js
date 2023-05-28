import React from 'react';
import MicroFrontendReactApp from './components/MicroFrontendReactApp';
import MicroFrontendReactApp2 from './components/MicroFrontendReactApp2';
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => (
    <div>
        <Link to='/'>Home Shell</Link><br />
        <Link to='/microfrontend'>Home Microfrontend</Link><br />
        <Link to='/microfrontend/subroute'>Subroute Microfrontend</Link><br />
        <Link to='/microfrontend2'>Home Microfrontend 2</Link><br />
        <Link to='/microfrontend3'>Home Microfrontend 3</Link><br />
    </div >
)

const Home = () => (<h1>Hola, soy una shell</h1>)

export default () => {
    const {pathname} = useLocation();
    const navigateShell = useNavigate();
    //const routes = [...MicroFrontendReactApp(), ...MicroFrontendReactApp2()];
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Header />
            <hr />
            <Routes>
                <Route path='/microfrontend/*' element={<MicroFrontendReactApp pathname={pathname} navigateShell={navigateShell} />} />
                <Route path='/microfrontend2/*' element={<MicroFrontendReactApp2 pathname={pathname} navigateShell={navigateShell} />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </React.Suspense>
    )
}