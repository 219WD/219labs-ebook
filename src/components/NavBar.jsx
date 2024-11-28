import React from 'react';
import './css/NavBar.css';
import useGsapNav from '../hooks/useGsapNav.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    useGsapNav();
    return (
        <div className='container navBar'>
            <nav>
                <div className="logo">
                    <a className="a-nav" href="#hero"><img src="./assets/site-logo.webp" alt="" /></a>
                </div>

                <div className="clock">
                    <p className="p-nav">
                        ON
                        <span className="span" id="currentTime"></span>
                    </p>
                </div>

                <div className="ctas">
                    <div className="contact">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                        <a className="a-nav" href="https://calendar.app.google/81VeRN9EiTqGqBVf9" target="_blank" rel="noopener noreferrer">Hablemos</a>
                    </div>

                    <div className="menu">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <p className="p-nav">Menu</p>
                    </div>
                </div>
            </nav>

            <div className="menu-container">
                <div className="whitespace"></div>
                <div className="whitespace"></div>
                <div className="menu-items">
                    <a className="menu-item a-nav" href="#about">
                        <span className="span">01</span>
                        <span className="span">Quiénes somos</span>
                    </a>
                    <a className="menu-item a-nav" href="#manual">
                        <span className="span">02</span>
                        <span className="span">¿Qué es este manual?</span>
                    </a>
                    <a className="menu-item a-nav" href="#instrucciones">
                        <span className="span">03</span>
                        <span className="span">Instrucciones</span>
                    </a>
                    <a className="menu-item a-nav" href="#contact">
                        <span className="span">04</span>
                        <span className="span">Descargar</span>
                    </a>
                    <a className="menu-item a-nav" href="https://219labs.vercel.app/">
                        <span className="span">01</span>
                        <span className="span">Nuestra Pagina</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;