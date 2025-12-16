import {NavLink, Outlet} from "react-router-dom";

const HooksPage = () => {

    return (
        <>
            <h1>Les Hooks</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="">Les composants Classes</NavLink>
                    </li>
                    <li>
                        <NavLink to="effect">Hook d'effet</NavLink>
                    </li>
                    <li>
                        <NavLink to="memo">Hook Mémo</NavLink>
                    </li>
                    <li>
                        <NavLink to="context">Hook Context</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default HooksPage;