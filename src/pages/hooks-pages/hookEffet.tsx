import {useEffect, useState} from "react";
import MyButton from "../../components/MyButton.tsx";
console.log("Outside component")
const HookEffet = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    console.log("Racine du composant");
    const appelApi = () => console.log("Appel API");

    let message = "coucou";
    const updateMessage = () => {
        message = "mis à jour";
    };

    useEffect(() => {
        console.log("UseEffect - vide");
    }) // A eviter : se relance à chaque re-rendu du composant

    useEffect(() => {
        console.log("UseEffect - avec tableau vide");
        appelApi();
    }, []); // Se lance 1 fois quand le composant est monté => Appels API et autres

    useEffect(() => {
        console.log("UseEffet - Counter modifié");
    }, [counter]);
    // Permet de "surveiller" counter et de réagir quand il est modifié
    // Toutes les données utilisées par le useEffect doivent être déclarée dans le tableau de dep

    useEffect(() => {
        console.log("message modifié")
    }, [message]);
    // Ne se lance qu'une fois, au montage
    // On ne peut pas surveiller des données non réactive

    useEffect(() => {
        let time = 1;
        const interval = setInterval(() => {
            time++;
            console.log(time);
        }, 1000);
        return () => { // Au moment du démontage
            clearInterval(interval);
        }
    }, []); // Return : démontage du composant

    useEffect(() => {
        console.log("Counter modified", counter2);
        return () => {
            console.log("[return] Counter modified", counter2)
        }
    }, [counter2]);
    // Ici return -> beforeUpdate



    return (
        <>
            <h2>Le Hook d'effet</h2>

            <p>
                Compteur {counter}
                <MyButton onClick={() => setCounter(counter + 1)}>+</MyButton>
                <MyButton level="secondary" onClick={() => setCounter(counter - 1)}>-</MyButton>
            </p>
            <p>
                Compteur2 {counter2}
                <MyButton onClick={() => setCounter2(counter2 + 1)}>+</MyButton>
                <MyButton level="secondary" onClick={() => setCounter2(counter2 - 1)}>-</MyButton>
            </p>
            <p>
                {message} <MyButton onClick={updateMessage}>change</MyButton>
            </p>

        </>
    )
}

export default HookEffet;