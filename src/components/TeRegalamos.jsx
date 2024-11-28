import React from 'react';
import './css/TeRegalamos.css';

const TeRegalamos = () => {
    return (
        <div className='container comoAyudamos'>
            <section className="comoAyuda" id="comoAyuda">
                <div className="comoAyuda-header">
                    <div className="comoAyuda-col">
                        <p className="callout">¿Qué es este manual?</p>
                    </div>
                    <div className="comoAyuda-col">
                        <h3>
                        Es una guía práctica que detalla el método del Customer Development para crear startups exitosas. En lugar de seguir un plan de negocio tradicional, el libro enseña a validar ideas mediante la interacción con clientes reales desde el inicio.
                        </h3>
                    </div>
                </div>
                <img src="https://219labs.vercel.app/assets/0-B1YNXgFS.svg" alt="w3" className='img-1' />
            </section>
        </div>
    );
}

export default TeRegalamos;