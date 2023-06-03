import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el, basename = '', pathname, navigateShell) => {
    const historyMfe = createBrowserHistory()
    ReactDOM.render(
        <App history={historyMfe} basename={basename} pathname={pathname} navigateShell={navigateShell} />,
        el
    )

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
    const devRoot = document.querySelector('#hello-react-dev-app')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }