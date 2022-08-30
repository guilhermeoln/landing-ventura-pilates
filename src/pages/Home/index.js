import './home.css';
import logo from '../../assets/logo-ventura.png';
import aulaPilates from '../../assets/aula-pilates.webp';
import imgSobre from '../../assets/img-sobre-pilates.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Home(){


    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])



    return(
        <div className='container-home'>
            <div className='conteudo-inicial'>
                <div className='texto-inicial' data-aos="fade-right">
                    <h2>Levo saúde para seu corpo atráves do Pilates</h2>
                    <p>Um espaço dedicado para atender homens e mulheres de todas idades.</p>
                    <a href="https://wa.me/5581995175871?text=Olá, gostaria de marcar uma aula experimental grátis." target="_blank">
                        AGENDAR AULA
                    </a>
                </div>
                <div className='img-inicial'>
                    <img src={logo} alt="logo-ventura" data-aos="fade-right"/>
                    <div className="area-icons" data-aos="fade-right">
                        <a href="">
                            <FaWhatsapp className='icon'/>
                        </a>
                        <a href="https://www.instagram.com/venturapilatesfisio/" target="_blank">
                            <FaInstagram className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-sobre' data-aos="fade-right">
                <div className='sobre-col1'>
                    <h2>SOBRE O PILATES</h2>
                    <p>
                    Pilates é um conjunto de exercícios que são realizados no solo ou em equipamentos exclusivos, 
                    que visa o total e completo controle e conexão entre corpo e mente, 
                    devolvendo e restaurando a saúde de indivíduos em condições patológicas, 
                    assim como promovendo um aumento da qualidade de vida para pessoas saudáveis.
                    </p>
                    <img src={imgSobre} alt="exercicio-pilates"/>
                </div>
                <div className='sobre-col2'>
                    <ul>
                        <h3>BENEFÍCIOS</h3>
                        <p>Os benefícios do Pilates para o corpo são inúmeros, como:</p>
                        <li>- Aumento da resistência física e mental</li>
                        <li>- Aumento da flexibilidade</li>
                        <li>- Correção de problemas posturais</li>
                        <li>- Aumento da concentração</li>
                        <li>- Tonificação da musculatura</li>
                        <li>- Alívio de dores musculares</li>
                        <li>- Auxilia na prevenção contra a Osteoporose</li>
                        <li>- Promove relaxamento, bem-estar e eleva a autoestima</li>
                        <li>- Ajuda na consciência corporal</li>
                    </ul>
                    <h4>Pra quem o Pilates é indicado?</h4>
                    <p>O pilates é um método de treinamento que pode ser realizado 
                        por pessoas de todas as idades e que pode trazer diversos 
                        benefícios para a saúde.
                    </p>
                    <a href="https://wa.me/5581995175871?text=Olá, gostaria de marcar uma aula experimental grátis." target="_blank">
                        AGENDAR AULA
                    </a>
                    <p className='descricao-botao'>* Agende uma aula experimental</p>
                </div>
            </div>
            <div className='container-aula' >
                <div className='text-aula' data-aos="fade-right">
                    <h2>COMO É UMA AULA DE PILATES</h2>
                    <p>Diferente de qualquer atividade que já tenha feito.</p>
                    <ul>
                        <li>Exercícios suave e eficazes;</li>
                        <li>Grande repertório de exercícios;</li>
                        <li>Desgaste físico reduzido;</li>
                        <li>Construção de uma postura correta e natural;</li>
                        <li>Aulas únicas, evitando monotonia;</li>
                        <li>Resultado rápidos e duradouros;</li>
                    </ul>
                </div>
                <div className='img-aula' data-aos="fade-right">
                    <img src={aulaPilates} alt="aula-pilates" />
                </div>
            </div>
        </div>
    );
}