import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter , Link } from 'react-router-dom'
import { setBasename, setNavigateShell, useNavigateMfe } from './hooks/useNavigateMfe';

const AboutPageeLazy = React.lazy(() => import("./pages/About"));
const HomePageLazy = React.lazy(() => import("./pages/Home"));


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
        <h1>React + Webpack</h1>
        <BrowserRouter  history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Redirect pathname={pathname} />
            <button onClick={()=> navigateShell('/')}>Home Shell</button>
            <Link to={`${basename}/`}>Home</Link> |
            <Link to={`${basename}/about`}>About</Link>
            <hr />
            <Switch>
                <Route path={`${basename}/about`} component={AboutPageeLazy} />
                <Route path={`${basename}/`} component={HomePageLazy} />
            </Switch>
            </React.Suspense>
        </BrowserRouter>
    </div>
}