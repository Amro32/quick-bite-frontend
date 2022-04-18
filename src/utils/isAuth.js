import jwt_decode from "jwt-decode";
import { logoutAction } from "../redux/user/userActions";
import setAuthToken from "./setAuthToken";

const isAuth = (dispatch)=>{
    const token = localStorage.token;

    if(token)
    {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            dispatch(logoutAction());
            setAuthToken(false);
            return false;
        }
        setAuthToken(token);
        return true;
    }

    return false;
}

export default isAuth;