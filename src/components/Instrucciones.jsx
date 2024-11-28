import React from 'react'
import './css/Instrucciones.css'
import useInstrucciones from '../hooks/useGsapInstrucciones'

const Instrucciones = () => {
    useInstrucciones();
    return (
        <div className='container saas'>
            <section className="prices" id='instrucciones'>
                <div className="prices-header">
                    <div className="prices-col"></div>
                    <div className="prices-col">
                        <h3>
                            ¡Obtén totalmente gratis este libro!

                            Para recibirlo en tu correo electrónico, solo tienes que rellenar el siguiente formulario. ¡No pierdas la oportunidad de obtener contenido valioso que te ayudará a llevar tu proyecto al siguiente nivel!
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Instrucciones