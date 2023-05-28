import React from 'react'
import { useNavigateMfe } from '../hooks/useNavigateMfe';

const Home = () => {
const {insideAbsolute} = useNavigateMfe()
return <div>
<h1>Welcome to My Microfrontend!</h1>
<button onClick={()=> {insideAbsolute('/microfrontend/subroute')}}>Ir a subroute</button>
</div>}

export default Home;