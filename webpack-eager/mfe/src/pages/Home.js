import React from 'react'
import { useNavigateMfe } from '../hooks/useNavigateMfe';

const Home = () => {
const {insideAbsolute} = useNavigateMfe()
return <div>
<h1>Home Microfrontend 1</h1>
<button onClick={()=> {insideAbsolute('/microfrontend/subroute')}}>Go to subroute</button>
</div>}

export default Home;