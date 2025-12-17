import {useEffect, useEffectEvent, useState} from "react";
import {getUsers} from "../services/Auth.service.ts";
import type {User} from "../types/User.type.ts";

const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    //https://react.dev/reference/react/useEffectEvent
    const fetchUsers = useEffectEvent(async () => {
        const res = await getUsers();
        setUsers(res || []);
    })


    useEffect(() => {
        fetchUsers()
        //getUsers().then(res => setUsers(res || []));
    }, []);

    return users;

}

export default useGetUsers;