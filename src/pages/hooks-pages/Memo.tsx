import {useCallback, useMemo, useRef, useState} from "react";
import MyButton from "../../components/MyButton.tsx";

const Memo = () => {
    const [notes] = useState([12, 15, 18]);
    const getMoyenne = () => {
        console.log("Calcule de la moyenne");
        const sum = notes.reduce((sum: number, current: number) => sum + current, 0);
        return sum / notes.length;
    }

    const [name, setName] = useState("Jean Michel");
    const inputRef = useRef<HTMLInputElement>(null);
    const updateName = () => {
        if(inputRef.current) {
            setName(inputRef.current.value);
        }
    }

    const moyenneMemo = useMemo(() => {
        console.log("Calcule de la moyenne ---- Memo");
        const sum = notes.reduce((sum: number, current: number) => sum + current, 0);
        return sum / notes.length;
    }, [notes]);

    // TODO : pourquoi à chaque re-rendu ???
    const moyenneCallback = useCallback((color: string) => {
        console.log("%c Moyenne callback", `background: ${color}`);
        const sum = notes.reduce((sum: number, current: number) => sum + current, 0);
        return sum / notes.length;
    }, [notes]);

    return (
        <>
            <h2>Mémoïzation</h2>

            <p>Moyenne  : {getMoyenne()} | {moyenneMemo} | {moyenneCallback('purple')}</p>
            <p> <b>Nom : {name}</b>
                <label>nom :<input ref={inputRef}/> </label>
                <MyButton onClick={updateName}>Update</MyButton>
            </p>

        </>
    )
}

export default Memo;