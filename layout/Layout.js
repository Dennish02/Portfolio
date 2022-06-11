import  Head  from 'next/head'

import React from 'react'
import Footer from '../componentes/Footer'
import Navbar from '../componentes/Navbar'
import Sidebar from '../componentes/Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Dennis Hesler</title>
        <meta name="description" content="Portfolio Hesler Dennis" />
      </Head>
      <section className="estructura">
        <Sidebar />
        <div className="contNavbar">
          <Navbar />
        </div>
        <main className="contenido">
          {children}
          <Footer />
        </main>
        
      </section>
    </>
  );
}
