import type {UserLogin} from "../types/User.type.ts";
import {login, logout} from "../services/Auth.service.ts";
import {useNavigate} from "react-router-dom";

const useLogin = () => {

    const navigate = useNavigate();

    const loginFunc = async (user: UserLogin) => {
        await login(user);
        navigate("/");
    }

    const logoutFunc = () => {
        logout();
        navigate('/hooks/perso');
    }

    return {login: loginFunc, logout: logoutFunc};
}

export default useLogin;