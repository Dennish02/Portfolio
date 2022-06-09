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
    </Head>
    <section className='estructura'>
            <Sidebar/>
              <main className='contenido'>
                {children}
              </main>
              <div className='contNavbar'>
                  <Navbar />

              </div>
    </section>
           
    </>
  )
}
