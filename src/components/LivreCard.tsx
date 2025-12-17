import type {LivreType} from "../utils/types/Librairie.type.ts";
import {JSX} from "react";

type Card1PropsType = {message?: string}
export const Card1 = ({message = "Coucou"}: Card1PropsType) => {
    return (
        <h3>{message}</h3>
    )
}


export const CardLivre = ({livre}: { livre: LivreType } ) => {

    return(
        <article className="card">
            <img src={livre.image || 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
                 alt={"Couverture de " + livre.name}
            />
            <h3>{livre.name}</h3>
            <p>-- {livre.author}</p>
        </article>
    )
}
type TitleProps = {children: string}
export const Title = ({children}: TitleProps ) => {
    return (
        <h4>{children}</h4>
    )
}

export enum Keys {
    a = "A", b = "B", c = "C"
}
export const TestChildren = ({children}: {children:  {[key in Keys] : (string | JSX.Element) }} ) => {

    return (
      <>
          <h3>{children[Keys.a]}</h3>
          <p>{children[Keys.b]}</p>
      </>
    )
}