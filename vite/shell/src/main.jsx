import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import { createBrowserHistory } from "history";

const history= createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App history={history} />
        </Router>
    
)
