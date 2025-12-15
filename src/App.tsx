import './App.css';
import Presentation from "./pages/Presentation.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactRouter from "./pages/ReactRouter.tsx";
import Navigation from "./components/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";

function App() {

    // JSX -> ressemble au HTML
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path={"/"} element={<Presentation />} />
                <Route path="/router/:id" element={<ReactRouter />} />
                <Route path="/reactivity" element={<Reactivite />} />
                <Route path="*" element={<h1>😭 404 - Vous êtes perdu•e ?</h1>}/>
            </Routes>
            <footer>
                <hr/>
                <p>AJC feat BeeUp Formation - 2025</p>
            </footer>
        </BrowserRouter>
    )
}

export default App;