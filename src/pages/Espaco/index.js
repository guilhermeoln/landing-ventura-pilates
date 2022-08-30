import './espaco.css';
import imageOne from '../../assets/espaco-ventura.jpeg';
import imageTwo from '../../assets/espaco-ventura1.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Espaco(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])


    return(
        <div className="container-espaco">
            <div className="texto-espaco" data-aos="fade-right">
                <h2>ENDEREÇO</h2>
                <p>R. Tabaiares, 261 - Sala102A - Ilha do Retiro</p>
                <a href="https://goo.gl/maps/vs2S2jt7vNi9CCF88" target="_blank">VER NO MAPA</a>
                <h2>CONTATO</h2>
                <p>(81)99517-5871</p>
                <p>batistaventura@hotmail.com</p>
                <h2>HORÁRIO DE FUNCIONAMENTO</h2>
                <p>Segunda a Quinta-Feira, 6:00h às 11:00h e 15:00h às 20:00h</p>
            </div>
            <div className="img-espaco" data-aos="fade-right">
                <img src={imageOne} alt="img-espaco"/>
                <img src={imageTwo} alt="img-espaco2"/>
            </div>
        </div>
    );
}