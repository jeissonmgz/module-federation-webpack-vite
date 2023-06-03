import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter , Link } from 'react-router-dom'
import { setBasename, setNavigateShell, useNavigateMfe } from './hooks/useNavigateMfe';

const SubrouteLazy = React.lazy(() => import("./pages/Subroute"));
const HomeLazy = React.lazy(() => import("./pages/Home"));


function Redirect({pathname}) {
    const {insideAbsolute} = useNavigateMfe()
    useEffect(() => {
      if(pathname){
        insideAbsolute(pathname);
      }
    }, [pathname])
    return <></>
  }

export default ({ history, basename, pathname, navigateShell }) => {
    setBasename(basename);
    setNavigateShell(navigateShell);
    return <div>
        <BrowserRouter  history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
        
            <Switch>

                <Route path={`${basename}/subroute`} component={SubrouteLazy} />
                <Route path={`${basename}/`} component={HomeLazy} />
            </Switch>
            <Redirect pathname={pathname} />
            <hr />
            <button onClick={()=> navigateShell('/')}>Home Shell</button>
            <Link to={`${basename}/`}>Home Microfrontend</Link> |
            <Link to={`${basename}/subroute`}>Subroute Microfrontend</Link>
            </React.Suspense>
        </BrowserRouter >
    </div>
}