import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>Home Shell
    
    <button onClick={()=> {console.log('navegar'); navigate('/')}}>Home</button>
    <button onClick={()=> {console.log('navegar /emoji'); navigate('/emoji')}}>Emoji</button>
    <button onClick={()=> {console.log('navegar /emoji/tags'); navigate('/emoji/tags')}}>Emoji Tags</button>
    
    <Link to="/emoji/tags">Tags</Link>
    </div>
  )
}

export default Home