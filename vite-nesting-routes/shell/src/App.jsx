import React from 'react'
import {  Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import './App.css'

const HomeLazy = React.lazy(() => import("./pages/Home"));
const EmojiAppLazy = React.lazy(() => import("EmojiMfe/App"));
const ColorAppLazy = React.lazy(() => import("ColorMfe/App"));

const NavBar = () => {
  const navigate = useNavigate();
  return <nav>
    <button onClick={()=> {navigate('/')}}>Home</button>
    <button onClick={()=> {navigate('/emoji')}}>Emoji</button>
    <button onClick={()=> {navigate('/emoji/tags')}}>Emoji Tags</button>
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
        <Route path='/' element={<HomeLazy />} />
        <Route path='/emoji/*' element={<EmojiAppLazy basename='/emoji' pathname={pathname} navigateShell={navigateShell}/>} />
        <Route path='/color/*' element={<ColorAppLazy basename='/color' pathname={pathname} navigateShell={navigateShell}/>} />
      </Routes>
    </React.Suspense>
  )
}

export default App
