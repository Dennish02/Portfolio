import  Head  from 'next/head'

import React from 'react'
import Navbar from '../componentes/Navbar'
import Sidebar from '../componentes/Sidebar'

export default function Layout({children}) {
  return (
    <>
    <Head>
        <title> Hesler Dennis</title>
        <meta name='description' content='Portfolio Hesler Dennis'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;700&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          
    </Head>
    <section className='estructura'>
            <Sidebar/>
              <main className='contenido'>
                {children}
              </main>
             
    </section>
            <div className='cont-Navbar'>
                  <Navbar />

              </div>
    </>
  )
}
