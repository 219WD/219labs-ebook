import React from 'react'
import './css/About.css'


const About = () => {
    return (
        <div className='container about'>
            <img src="https://219labs.vercel.app/assets/site-logo-DILj7wbm.webp" alt="Logo" className='LogoAbout' />
            <div className="txt">
                <p className="callout">¿Quiénes somos?</p>
                <p className='parrafoAbout'>
                    Somos una agencia de desarrollo de software y diseño web especializada en pequeñas y medianas empresas,
                    ayudamos al crecimiento exponencial de tu empresa y potenciamos tu marca.
                    Mostramos al mundo tu empresa con estrategias de marketing y contenido de valor.
                    Somos la agencia digital dedicada a crear y potenciar marcas.
                </p>
                <img src="https://219labs.vercel.app/assets/1-DpHjHx1l.svg" alt="web3" className='img-2' />
            </div>
        </div>
    )
}

export default About