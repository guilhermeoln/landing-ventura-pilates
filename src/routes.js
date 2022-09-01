import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Contato from "./pages/Contato";
import Espaco from "./pages/Espaco";
import Footer from "./Component/Footer";
import Header from "./Component/Header";




export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/contato" element={ <Contato /> } />
                <Route path="/espaco" element={ <Espaco /> } />

                <Route path="*" element={ <Erro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}