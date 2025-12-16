import {createContext, useContext, useState} from "react";
const GrandChild = () => {
    const message = useContext(MessageContexte);
    return (
        <>
            <h4>Petit enfant</h4>
            <p>Message de papy : {message} </p>
        </>
    )
}

const Child = () => (
    <>
        <h3>Enfant</h3>
        <GrandChild />
    </>
)

const MessageContexte = createContext<string | null>(null);
const HookContexte = () => {
    const [message] = useState<string>("Vive les compteurs !");
    return (
        <MessageContexte.Provider value={message}>
            <h2>UseContext</h2>
            <Child />
        </MessageContexte.Provider>

    )
}

export default HookContexte;