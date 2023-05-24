import React from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import App from './App'
import './index.css'

const mount = (container, basename = '') => {
    const history = createBrowserHistory()
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App history={history} basename={basename} />);

    return {
        onParentNavigate({ pathname: nextPathname }, basename) {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }