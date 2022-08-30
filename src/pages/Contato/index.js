import './contato.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BiBeenHere } from "react-icons/bi";



export default function Contato(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])


    return(
        <div className="container-contato">
            <div className="form-contato" data-aos="fade-right">
                <h2>Tire suas dúvidas e fale conosco</h2>
                <p>Deixe sua mensagem e responderemos o mais breve possível</p>
                <form >
                    <input type="text" placeholder='Nome'/>
                    <input type="email" placeholder='E-mail'/>
                    <textarea placeholder='Mensagem'></textarea>
                    <button>ENVIAR</button>
                </form>
            </div>
            <div className="texto-contato" data-aos="fade-right">
                <p><FaWhatsapp className='icon-contato'/>(81)99517-5871</p>
                <p><BiMailSend className='icon-contato'/>batistaventura@hotmail.com</p>
                <p><BiBeenHere className='icon-contato'/>R. Tabaiares, 261 - Sala102A</p>
                <div className='botoes-social'>
                    <a href="https://wa.me/5581995175871?text=Olá, gostaria de tirar uma dúvida!" target="_blank">
                        <FaWhatsapp className='icon-texto'/>
                    </a>
                    <a href="https://www.instagram.com/venturapilatesfisio/" target="_blank">
                        <FaInstagram className='icon-texto'/>
                    </a>
                </div>
            </div>
        </div>
    );
}