import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserHistory } from "history";

const history= createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root')).render(
    
        <App history={history} />
    
)
