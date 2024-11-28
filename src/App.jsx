import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomeScreen = lazy(() => import('./pages/HomeScreen'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Agencia Digital 219Labs | Ebook de regalo - El manual del emprendedor</title>
        <link rel="icon" type="image/png" href="/site-logo.png" />
        <meta name="description" content="219Labs es una agencia digital en Tucumán especializada en desarrollo web, software y marketing digital. Transformamos tu negocio digitalmente con soluciones innovadoras y creativas." />
        <meta name="keywords" content="Agencia Digital Tucumán, Diseño y Desarrollo Web, Marketing Digital, Software y Desarrollo Web" />
        <meta name="author" content="219Labs CanepaDev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Labs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mate de Luna 1269",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816671884",
            "description":
              "Agencia de desarrollo web, software y marketing digital de Tucuman. 219LABS ha estado a la vanguardia de la innovación digital, creando productos web3 de última generación y brindando soporte de diseño excepcional tanto para startups como para grandes corporaciones.",
            "url": "https://219labs.vercel.app/",
          })}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;