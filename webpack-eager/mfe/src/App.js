import React, {useEffect} from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom'
import { setBasename, setNavigateShell, useNavigateMfe } from './hooks/useNavigateMfe';

import './assets/style.css';

const SubrouteLazy = React.lazy(() => import("./pages/Subroute"));
const HomeLazy = React.lazy(() => import("./pages/Home"));

function Redirect({pathname}) {
    const {insideAbsolute} = useNavigateMfe()
    useEffect(() => {
        if(pathname) {
            insideAbsolute(pathname);
        }
    }, [pathname])
    return <></>
}

export default ({ basename, pathname, navigateShell }) => {
    setBasename(basename);
    setNavigateShell(navigateShell);
    return <div className='mfe1'>
        <BrowserRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={`${basename}/subroute`} element={<SubrouteLazy />} />
                    <Route path={`${basename}`} element={<HomeLazy />} />
                </Routes>
                <Redirect pathname={pathname} />
                <nav className='navbar'>
                    <ul>
                        <li>
                            <a href="/" onClick={()=>{navigateShell(`/`)}}>Home Shell</a>
                        </li>
                        <li>
                            <Link to={`${basename}/`}>Home Microfrontend 1</Link>
                        </li>
                        <li>
                            <Link to={`${basename}/subroute`}>Subroute Microfrontend 1</Link>
                        </li>
                        <li>
                            <a href="/microfrontend2" onClick={()=>{navigateShell(`/microfrontend2`)}}>Home Microfrontend 2</a>
                        </li>
                    </ul>
                </nav>
            </React.Suspense>
        </BrowserRouter>
    </div>
}