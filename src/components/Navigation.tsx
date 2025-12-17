import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';
import useLogin from "../utils/hooks/useLogin.ts";
import {isLogged} from "../utils/services/Auth.service.ts";
import {useEffect} from "react";
import {useAppSelector} from "../utils/hooks/useStore.ts";

function Navigation() {
    const {logout} = useLogin();
    const counter = useAppSelector(state => state.counter);
    useEffect(() => {
        console.log("navigation");
    }, [])

    return (
        <nav>
            <ul>
                <li>Counter: {counter}</li>
                <li>
                    <NavLink to="/">Présentation </NavLink>
                </li>
                <li>
                    <NavLink to={{
                        pathname: "/router/" + 123,
                        search: 'name=JeanMichel'

                    }}>Router</NavLink>
                </li>
                <li>
                    <NavLink to="/reactivity">Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to="/librairie">Librairie</NavLink>
                </li>
                <li>
                    <NavLink to="/hooks">Hooks</NavLink>
                </li>
                <li>
                    <NavLink to="/store">Store</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">Admin</NavLink>
                </li>
                {isLogged() &&
                    <li>
                        <button onClick={() => logout()}>Logout</button>
                    </li>
                }

            </ul>
        </nav>
    )
}

export default Navigation;