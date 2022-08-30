import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Espaco from "./pages/Espaco";
import Footer from "./Component/Footer";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/contato" element={ <Contato /> } />
                <Route path="/espaco" element={ <Espaco /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}