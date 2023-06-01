import { createApp } from 'vue'
import App from './App.vue'
import generateRouter from './router' // <---
import { setNavigateShell } from './navigateShell'

export const mount = (idElement, history = null, basename = "", navigateShell = ()=> {}) => {
    const router = generateRouter(history, basename)
    setNavigateShell(navigateShell)
    createApp(App).provide('basename', basename).use(router).mount(idElement)    
    return router;
}
