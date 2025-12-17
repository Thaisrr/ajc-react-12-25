import {useMouseLocation} from "../../utils/hooks/useMouseLocation.ts";
import useGetUsers from "../../utils/hooks/useGetUsers.ts";
import useLogin from "../../utils/hooks/useLogin.ts";
import {useForm} from "react-hook-form";
import type {UserLogin} from "../../utils/types/User.type.ts";

const HookPerso = () => {

    const {x, y} = useMouseLocation();
    const users = useGetUsers();
    const {login} = useLogin();
    const {register, handleSubmit, formState: errors} = useForm<UserLogin>();

    return (
        <>
            <h2>Hooks personnalisés</h2>
            <ul>
                <li>X : {x}</li>
                <li>Y : {y}</li>
            </ul>
            <section>
                <h2>Users</h2>
                <ul>
                    {users.map((user) => {
                       return  <li key={user.id}>{user.username}</li>
                    })}
                </ul>
            </section>
            <form onSubmit={handleSubmit(login)}>
                <div>
                    <label htmlFor="email">Username:</label>
                    <input {...register('username', {
                        required: 'Email Obligatoire',
                       // pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Format invalide'}
                    })}/>
                    <p style={{ color: 'red' }}>{errors.errors.username?.message}</p>
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" {...register('password', {
                        required: 'Veuillez entrer un mot de passe',
                    })}/>
                    <p style={{ color: 'red' }}>{errors.errors.password?.message}</p>
                </div>
                <p>
                    <button type="submit">Login</button>
                </p>

            </form>


        </>
    )
}

export default HookPerso;