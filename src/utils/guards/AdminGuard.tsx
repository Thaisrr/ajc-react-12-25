import {isLogged} from "../services/Auth.service.ts";
import {type JSX} from "react";
//import {Navigate} from "react-router-dom";

const AdminGuard = ({children}: {children: JSX.Element}) => {

    if(isLogged()) return children;
   // return <Navigate to='/login' replace />
    return <h1>🔒 401 : Qu'est-ce que vous faites là ?</h1>
}

export default AdminGuard;