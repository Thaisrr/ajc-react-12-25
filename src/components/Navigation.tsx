import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Présentation</NavLink>
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
            </ul>
        </nav>
    )
}

export default Navigation;