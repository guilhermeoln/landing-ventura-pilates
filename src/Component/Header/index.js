import './header.css';
import logo from '../../assets/logo-ventura.png';
import { Link } from 'react-router-dom';



export default function Header(){
    return(
        <header>
            <img src={logo} alt='logo-ventura' />
            <nav>
                <Link to="/">INÍCIO</Link>
                <Link to="/espaco">NOSSO ESPAÇO</Link>
                <Link to="/contato">CONTATO</Link>
            </nav>
        </header>
    );
}