import axios from "axios";
import type {User, UserLogin} from "../types/User.type.ts";

const api = import.meta.env.VITE_API_URL;
const loginApi = import.meta.env.VITE_API_LOGIN;

export const login =  async (userLogin: UserLogin) => {
    try {
        const {data: {accessToken, ...user}} = await axios.post<User>(`${loginApi}/auth/login`, userLogin);
        localStorage.setItem("token", accessToken);
        return user;
    } catch (e) {
        console.error(e);
    }
}

export const logout = () => localStorage.removeItem("token");

export const isLogged = (): boolean => !!localStorage.getItem("token");

export const getToken = () => localStorage.getItem("token");

export const getUsers = async () => {
    try {
        const {data} = await axios.get<User[]>(`${api}/users`);
        console.log(data);
        return data;
    } catch {
        // handle error
    }
}
