import './App.css';
import Presentation from "./pages/Presentation.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactRouter from "./pages/ReactRouter.tsx";
import Navigation from "./components/Navigation.tsx";
import Reactivite from "./pages/Reactivite.tsx";
import Librairie from "./pages/Librairie.tsx";
import HooksPage from "./pages/hooks-pages/HooksPage.tsx";
import ClasseComponent from "./pages/hooks-pages/ClasseComponent.tsx";
import HookEffet from "./pages/hooks-pages/hookEffet.tsx";
import Memo from "./pages/hooks-pages/Memo.tsx";
import HookContexte from "./pages/hooks-pages/HookContexte.tsx";
import HookPerso from "./pages/hooks-pages/HookPerso.tsx";
import {LesStores} from "./pages/LesStores.tsx";
//import PageAdmin from "./pages/PageAdmin.tsx";
import {lazy} from "react";
import AdminGuard from "./utils/guards/AdminGuard.tsx";
const PageAdmin = lazy(() => import('./pages/PageAdmin.tsx')); // Lazy Loading

function App() {

    // JSX -> ressemble au HTML
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path={"/"} element={<Presentation />} />
                <Route path="/router/:id" element={<ReactRouter />} />
                <Route path="/reactivity" element={<Reactivite />} />
                <Route path='/librairie' element={<Librairie />} />
                <Route path="/hooks" element={<HooksPage />}>
                    <Route path="" element={<ClasseComponent />} />
                    <Route path="effect" element={<HookEffet />} />
                    <Route path="memo" element={<Memo />} />
                    <Route path="context" element={<HookContexte />} />
                    <Route path="perso" element={<HookPerso />} />
                </Route>
                <Route path="store" element={<LesStores />} />
                <Route path="admin" element={<AdminGuard><PageAdmin /></AdminGuard>} />
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