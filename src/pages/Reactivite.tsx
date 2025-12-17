import {useState} from "react";
// import type { User} from "../utils/types/User.type.ts";

function Reactivite() {
    let count = 0;

    const increment = () => {
        count++;
        console.log(count);
    };
    const decrement = () => count--;
    const incrementByAmount = (amount: number) => count += amount;

    //------------------------- Les states
    //const stateArray = useState<number>(0);
    //const compteur = stateArray[0]; // la valeur du compteur, ici 0
    //const setCompteur = stateArray[1]; // une fonction qui permettra de màj le compteur
    const [compteur, setCompteur] = useState<number>(0);

    function incrementer() {
        setCompteur(compteur + 1);
        //setCompteur(previousState => previousState + 1);
    }
    const decrementer = () => setCompteur(compteur - 1);
    const incrementerParValeur = (amount: number) => setCompteur(compteur + amount);

    // --------------------------------------------------

    const [isLogged, setIsLogged] = useState<boolean>(false);
    const login = () => setIsLogged(true);
    const logout = () => setIsLogged(false);

    const LoggedInBlock = () => (
        <div>
            <h3>Bienvenue Jean Michel</h3>
            <p>
                <button onClick={logout}>Se déconnecter</button>
            </p>
        </div>
    );

    const LoggedOutBlock = () => (
        <div>
            <h3>Boooooouuh trop nul veuillez vous connecter !</h3>
            <p>
                <button onClick={login}>Connexion</button>
            </p>
        </div>
    );



    return (
        <>
            {/* mon commentaire */}
            <h1>La Réactivité</h1>

            <section>
                <h2>Compteur à {count}</h2>
                <p>
                    <button onClick={increment}>+</button>
                    <button onClick={() => incrementByAmount(10)}>+10</button>
                    <button onClick={() =>decrement()}>-</button>
                </p>
            </section>
            <section>
                <h2>Compteur à {compteur}</h2>
                <p>
                    <button onClick={incrementer}>+</button>
                    <button onClick={() => incrementerParValeur(10)}>+10</button>
                    <button onClick={() => decrementer()}>-</button>
                </p>
            </section>
            <section>
                {isLogged ? <LoggedInBlock /> : <LoggedOutBlock />}
            </section>


        </>
    )
}

export default Reactivite;