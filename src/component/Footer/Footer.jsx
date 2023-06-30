import React from 'react'
import './Footer.css';
import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <ul className='footerInfo'>
                            <div>
                                <li className='footInfo1'><strong className='titulo'>Sobre nosotros</strong>
                                    <li>Nuestra historia</li>
                                    <li>Nuestra mision</li>
                                    <li>Nuestro café</li>
                                    <li>Novedades</li>
                                </li>
                            </div>
                            <div>
                                <li className='footInfo3'><strong className='titulo'>Experiencia Borcelle</strong></li>
                                <li>Formas de comprar</li>
                                <li>Delivery</li>
                            </div>
                            <div>
                                <li className='footInfo4'><strong className='titulo'>Alternativas de sostenibilidad</strong></li>
                                <li>Reciclaje</li>
                                <li>Compost</li>
                                <li>Reutilizacion</li>
                            </div>
                            <div>
                                <li className='footInfo2'><strong className='titulo'>Atencion al cliente</strong>
                                    <li>Contacto</li>
                                </li>
                            </div>
                        </ul>
                        <hr />
                        <div className='redesSociales'>
                            <Icon id='icon' className=' animate__animated animate__pulse' path={mdiInstagram} size={2} />
                            <Icon id='icon' className=' animate__animated animate__pulse' path={mdiFacebook} size={2} />
                            <Icon id='icon' className=' animate__animated animate__pulse' path={mdiTwitter} size={2} />
                            <Icon id='icon' className=' animate__animated animate__pulse' path={mdiLinkedin} size={2} />
                        </div>
                        <div>
                        <p className='footer-option d-flex flex-column-reverse'>Accesibilidad web | Aviso de Privacidad | Condiciones de uso | Mapa de sitio | Preferencia sobre cookies ©2023</p>
                        </div>
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer