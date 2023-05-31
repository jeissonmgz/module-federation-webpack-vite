import React, { useEffect, useState } from 'react'
import {  Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import './App.css'
import AngularMFE from './components/AngularMfe';
//import AngularAppLazy from "AngularMfe/App";

const HomeLazy = React.lazy(() => import("./pages/Home"));
//const AngularAppLazy = React.lazy(() => import("AngularMfe/App"));
//const ColorAppLazy = React.lazy(() => import("ColorMfe/App"));

const NavBar = () => {
  const navigate = useNavigate();
  
  return <nav>
    <button onClick={()=> {navigate('/')}}>Home</button>
    <button onClick={()=> {navigate('/angular')}}>Angular</button>
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
        <Route path='/angular/*' element={<AngularMFE />} />
        <Route path='/' element={<HomeLazy />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
