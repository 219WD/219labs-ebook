import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TeRegalamos from '../components/TeRegalamos'
import AboutLibro from '../components/AboutLibro'
import Footer from '../components/Footer'
import Instrucciones from '../components/Instrucciones'

const HomeScreen = () => {
  return (
    <div className='container'>
        <Hero />
        <About />
        <TeRegalamos />
        <AboutLibro />
        <Instrucciones />
        <Footer />
    </div>
  )
}

export default HomeScreen