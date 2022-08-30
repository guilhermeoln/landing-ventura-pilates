import './footer.css';
import logo from '../../assets/logo-ventura.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer(){
    return(
        <footer>
            <div className='logo-footer'>
                <img src={logo} alt="ventura-logo" />
                <p>Siga-nos nas redes sociais</p>
                <div className='container-icons-footer'>
                    <a href="https://wa.me/5581995175871?text=" target="_blank">
                        <FaWhatsapp className='icon-footer'/>
                    </a>
                    <a href="https://www.instagram.com/venturapilatesfisio/" target="_blank">
                        <FaInstagram className='icon-footer'/>
                    </a>
                </div>
            </div>
            <div className='text-footer'>
                <h3>Telefone</h3>
                <p>(81)99517-5871</p>
                <h3>Email</h3>
                <p>batistaventura@<br></br>hotmail.com</p>
                <h3>Endereço</h3>
                <p>R. Tabaiares, 261 - Sala102A</p>
            </div>
        </footer>
    );
}