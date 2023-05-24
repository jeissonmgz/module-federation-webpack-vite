import { useNavigate } from "react-router-dom";

let basename = "";

export const useNavigateMfe = () => {
    const navigate = useNavigate();
    const inside = (route) => navigate(`${basename}${route}`);
    const outside = (route) => navigate(`${basename}${route}`);
    return {
        inside, outside, setBasename
    }
}
export const setBasename = (newBasename) => {basename = newBasename};
