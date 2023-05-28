import React, {useEffect} from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom'
import { setBasename, setNavigateShell, useNavigateMfe } from './hooks/useNavigateMfe';

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
    return <div>
        <BrowserRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={`${basename}/subroute`} element={<SubrouteLazy />} />
                    <Route path={`${basename}`} element={<HomeLazy />} />
                </Routes>
                <Redirect pathname={pathname} />
                <br />
                <Link to={`/`}>Home Shell</Link>
                <br />
                <Link to={`${basename}/`}>Home Microfrontend</Link>
                <br />
                <Link to={`${basename}/subroute`}>Subroute Microfrontend</Link>
            </React.Suspense>
        </BrowserRouter>
    </div>
}