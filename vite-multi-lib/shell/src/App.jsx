import React from 'react'
import {  Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import './App.css'
const HomeLazy = React.lazy(() => import("./pages/Home"));
const AngularAppLazy = React.lazy(() => import('./components/AngularMfe'));
const VueAppLazy = React.lazy(() => import('./components/VueMfe'));
const ReactAppLazy = React.lazy(() => import('./components/ReactWebpackApp'));


const NavBar = () => {
  const navigate = useNavigate();
  
  return <nav>
    <button onClick={()=> {navigate('/')}}>Home</button>
    <button onClick={()=> {navigate('/angular')}}>Angular Home</button>
    <button onClick={()=> {navigate('/angular/about')}}>Angular About</button>
    <button onClick={()=> {navigate('/vue')}}>Vue Home</button>
    <button onClick={()=> {navigate('/vue/about')}}>Vue About</button>
    <button onClick={()=> {navigate('/react')}}>React Home</button>
    <button onClick={()=> {navigate('/react/about')}}>React About</button>
  </nav>
}

function App() {
  const {pathname} = useLocation();
  const navigateShell = useNavigate();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Routes>
        <Route path='/react/*' element={<ReactAppLazy basename={"/react"} pathname={pathname} navigateShell={navigateShell} />} />
        <Route path='/vue/*' element={<VueAppLazy basename={"/vue"} pathname={pathname} navigateShell={navigateShell} />} />
        <Route path='/angular/*' element={<AngularAppLazy pathname={pathname} navigateShell={navigateShell} />} />
        <Route path='/' element={<HomeLazy />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
