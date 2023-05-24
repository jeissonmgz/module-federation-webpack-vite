import { useNavigate } from "react-router-dom";

let basename = "";
let navigateShell = null;

export const useNavigateMfe = () => {
    const navigate = useNavigate();
    const inside = (route) => navigate(`${basename}${route}`);
    const insideAbsolute = (route) => navigate(`${route}`);
    return {
        inside, insideAbsolute, setBasename, outside: navigateShell
    }
}
export const setBasename = (newBasename) => {basename = newBasename};
export const setNavigateShell = (newNavigateShell) => {navigateShell = newNavigateShell};
