import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "../pages/about/index";
import PrincipalPage from '../pages/home';
import Inicial from "../pages/inicialpage";

const Rotas = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Inicial />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/home" element={<PrincipalPage />} ></Route>
        </Routes>
    </Router>
)

export default Rotas;