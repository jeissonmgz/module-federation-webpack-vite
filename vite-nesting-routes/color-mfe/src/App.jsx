import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import { setBasename, setNavigateShell, useNavigateMfe } from './hooks/useNavigateMfe';


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


function App({ basename, pathname, navigateShell }) {
  setBasename(basename);
  setNavigateShell(navigateShell);
  return (
    <div className="ColorMfe">
    <Router >
    <React.Suspense fallback={<div>Loading...</div>}>
    
        <Routes>

            
            <Route path={`${basename}/`} element={<HomeLazy />} />
        </Routes>
        <Redirect pathname={pathname} />
        <br />
        <button onClick={()=>{navigateShell('/')}}>Home</button>
        <button onClick={()=>{navigateShell('/emoji')}}>Emoji</button>
        <button onClick={()=>{navigateShell('/emoji/tags')}}>Emoji Tags</button>
        
        <br />
        </React.Suspense>
    </Router>
    </div>
  )
}

export default App
