import React from 'react'
import './css/Hero.css'
import libro from '../assets/libro.png'

const Hero = () => {
    return (
        <div className='container hero'>
            <div className="hero-img"><img src="https://219labs.vercel.app/assets/grad-DEgm7TzC.webp" alt="Gradiant" /></div>
            <div className="txt">
                <h1>El manual <br /> del emprendedor</h1>
                <h2>La guía paso a paso para crear una gran empresa</h2>
                <p>Es una guía esencial para emprendedores que quieren construir startups exitosas siguiendo un enfoque práctico y validado. </p>
            </div>
            <div className="imagen">
                <img src={libro} alt="libro" />
            </div>
        </div>
    )
}

export default Hero