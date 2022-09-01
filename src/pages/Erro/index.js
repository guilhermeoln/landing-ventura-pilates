import './erro.css'
import { Link } from 'react-router-dom';


export default function Erro(){
    return(
        <div className="container-erro">
            <h1>OOPS!</h1>
            <p>ERROR 404: Página não encontrada...</p>
            <Link to="/">PÁGINA INICIAL</Link>
        </div>
    );
}