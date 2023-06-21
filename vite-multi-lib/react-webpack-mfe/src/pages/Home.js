import React from 'react'
import { useNavigateMfe } from '../hooks/useNavigateMfe';

const Home = () => {
    const {outside: navigateShell} = useNavigateMfe();
    const goToAngularHome = () => {
        navigateShell('/angular');
    };
    const goToAngularAbout = () => {
    navigateShell('/angular/about');
    };
    const goToVueHome = () => {
    navigateShell('/vue');
    };
    const goToVueAbout = () => {
        navigateShell('/vue/about');
    };
    return (<section>
        <h2>Home</h2> 
        <table>
            <thead>
            <tr>
                <th>Page</th>
                <th>Angular</th>
                <th>Vue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Home</td>
                <td><button onClick={()=> goToAngularHome()}>Ir a Angular:Home</button></td>
                <td><button onClick={()=> goToVueHome()}>Ir a Vue:Home</button></td>
            </tr>
            <tr>
                <td>About</td>
                <td><button onClick={()=> goToAngularAbout()}>Ir a Angular:About</button></td>
                <td><button onClick={()=> goToVueAbout()}>Ir a Vue:About</button></td>
            </tr>
            </tbody>
        </table>
    </section>)
}

export default Home;