import {useParams, useSearchParams} from "react-router-dom";

function ReactRouter() {
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    return (
        <>
            <h1>Le Router</h1>
            <p>Installer react router : <code>npm i react-router-dom</code></p>
            <p>Configurer App.tsx</p>

            <ul>
                <li>ID : {id}</li>
                <li>Search Param name : {name}</li>
            </ul>
        </>
    )
}

export default ReactRouter;