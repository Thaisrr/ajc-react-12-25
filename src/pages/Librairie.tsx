import {useState} from "react";
import type {LibrairieType} from "../utils/types/Librairie.type.ts";
import {LibrairiesDB} from "../utils/db/Librairie.db.ts";
import {Card1, CardLivre, Title} from "../components/LivreCard.tsx";
import MyButton from "../components/MyButton.tsx";

const Librairie = () => {
    const [library] = useState<LibrairieType>(LibrairiesDB);



    return (
        <>
            <h1>Ma Librairie</h1>
            <Title>Hello World</Title>
            <p>
                <MyButton
                    onClick={() => {alert('Coucou')}}
                > Don't click !
                </MyButton>
                <MyButton
                    color="success"
                    level="secondary"
                    onClick={() => {alert('Coucou')}}
                    className="toto"
                    title="Super Bouton"
                >
                    Click me!
                </MyButton>

            </p>
            <Card1 message="Hello World" />
            <Card1 />
            <CardLivre livre={{
                id: "abc",
                name: "Petit Ours Brun",
                author: "Je sais pas",
                image: ""
            }} />




            <div className="grid">
                {library.map((livre) => (
                    <CardLivre
                        livre={livre}
                        key={livre.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Librairie;