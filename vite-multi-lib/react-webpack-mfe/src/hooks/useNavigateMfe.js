import { useHistory } from "react-router-dom";

let basename = "";
let navigateShell = null;

export const useNavigateMfe = () => {
    const history = useHistory();
    const inside = (route) => history.push(`${basename}${route}`);
    const insideAbsolute = (route) => {
        console.log(route)
        history.push(`${route}`)
    };
    return {
        inside, insideAbsolute, setBasename, outside: navigateShell
    }
}
export const setBasename = (newBasename) => {basename = newBasename};
export const setNavigateShell = (newNavigateShell) => {navigateShell = newNavigateShell};
