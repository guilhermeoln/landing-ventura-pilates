import './contato.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BiBeenHere } from "react-icons/bi";
import emailjs from '@emailjs/browser'


export default function Contato(){


    const [error, setError] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    const sendEmail = (e) => {
        e.preventDefault();


         if(!nome || !email || !mensagem){
            setError('Preencha todos os campos!');
        } else{
            
            setLoading(true);

            emailjs.sendForm('service_bibaxxq', 'template_wuwduih', e.target, 'ekkL6DPfcdnBDUN91')
          .then((result) => {
              alert('Email enviado com sucesso!')
              setError('');
              setEmail('');
              setMensagem('');
              setNome('');
              setLoading(false);
          }, (error) => {
              console.log(error.text);
              alert('Não foi possivel enviar o email, tente novamente!')
              setLoading(false);
        });
        }
    }

    return(
        <div className="container-contato">
            <div className="form-contato" data-aos="fade-right">
                <h2>Tire suas dúvidas e fale conosco</h2>
                <p>Deixe sua mensagem e responderemos o mais breve possível</p>
                {error && <p className='msg-error'>{error}</p>}
                <form onSubmit={ sendEmail }>
                    <input type="text" placeholder='Nome' value={nome} name='name' onChange={(e) => setNome(e.target.value)}/>
                    <input type="email" placeholder='E-mail' value={email} name='email' onChange={(e) => setEmail(e.target.value)}/>
                    <textarea placeholder='Mensagem' value={mensagem} name='message' onChange={(e) => setMensagem(e.target.value)}>
                    </textarea>
                    <button type='submit'>{loading ? 'ENVIANDO...' : 'ENVIAR'}</button>
                </form>
            </div>
            <div className="texto-contato" data-aos="fade-right">
                <p><FaWhatsapp className='icon-contato'/>(81)99517-5871</p>
                <p><BiMailSend className='icon-contato'/>contatoventurapilates@gmail.com</p>
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