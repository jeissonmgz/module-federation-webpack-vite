import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'

const HomeLazy = React.lazy(() => import("./pages/Home"));
const EmojiAppLazy = React.lazy(() => import("remoteApp/mount"));

const NavBar = () => {
  const navigate = useNavigate();
  return <nav>
    <button onClick={()=> {navigate('/')}}>Home</button>
    <button onClick={()=> {navigate('/emoji')}}>Emoji</button>
    <button onClick={()=> {navigate('/emoji/tags')}}>Emoji Tags</button>
    
  </nav>
}

function App({history}) {




  return (<Router>
    <React.Suspense fallback={<div>Loading...</div>}>
    
    <NavBar />
    <Link to="/emoji/tags">Tags</Link>
    <Routes>
      <Route path='/' element={<HomeLazy />} />
        <Route path='/emoji/*' element={<EmojiAppLazy basename='/emoji' />} />
    </Routes>
        </React.Suspense></Router>
  )
}

export default App
