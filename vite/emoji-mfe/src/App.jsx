import React, { useEffect } from 'react'
import { useLocation , Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import { setBasename } from './hooks/useNavigateMfe';


const CategoryLazy = React.lazy(() => import("./pages/Category"));
const HomeLazy = React.lazy(() => import("./pages/Home"));


function App({ basename }) {
  setBasename(basename);

  return (
    <div className="App">
    <Router >
    <React.Suspense fallback={<div>Loading...</div>}>
    
        <Routes>

            <Route path={`${basename}/tags/:tag?`} element={<CategoryLazy />} />
            <Route path={`${basename}/`} element={<HomeLazy />} />
        </Routes>
        <br />
        <Link to={`${basename}/`}>Inicio</Link>&nbsp;&nbsp;| 
        &nbsp;<Link to={`${basename}/tags`}>Tags</Link>
        <br />
        </React.Suspense>
    </Router>
    </div>
  )
}

export default App
