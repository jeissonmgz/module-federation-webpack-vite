import React from 'react'
import {  Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import './App.css'
const HomeLazy = React.lazy(() => import("./pages/Home"));
const AngularAppLazy = React.lazy(() => import('./components/AngularMfe'));

const NavBar = () => {
  const navigate = useNavigate();
  
  return <nav>
    <button onClick={()=> {navigate('/')}}>Home</button>
    <button onClick={()=> {navigate('/angular')}}>Angular Home</button>
    <button onClick={()=> {navigate('/angular/about')}}>Angular About</button>
  </nav>
}

function App() {
  const {pathname} = useLocation();
  const navigateShell = useNavigate();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Link to="/emoji/tags">Tags</Link> - 
      <Link to="/color">Color</Link>
      <Routes>
        <Route path='/angular/*' element={<AngularAppLazy pathname={pathname} navigateShell={navigateShell} />} />
        <Route path='/' element={<HomeLazy />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
