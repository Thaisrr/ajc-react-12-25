import {useAppSelector} from "../utils/hooks/useStore.ts";

const PageAdmin = () => {
    const counter = useAppSelector(state => state.counter);

    return (
        <>
            <h1>Administration</h1>
            <p>Compteur : {counter}</p>
        </>


    )
}

export default PageAdmin;