import type {LibrairieType} from "../types/Librairie.type.ts";

export const LibrairiesDB: LibrairieType = [
    {id: self.crypto.randomUUID(), name: 'Hunger Games', author: "Suzanne Colins"},
    {id: self.crypto.randomUUID(), name: 'Dracula', author: "Bram Stocker"},
    {id: self.crypto.randomUUID(), name: 'Frankenstein', author: "Mary Shelley", image: "https://media.hachette.fr/fit-in/500x500/imgArticle/LGFLIVREDEPOCHE/2025/9782253023388-001-X.jpeg?source=web&v=c54f2e05edb4c298f68f20ae7103fb82"},
]