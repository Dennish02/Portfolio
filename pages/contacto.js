import React from 'react'
import Layout from '../layout/Layout'

export default function Contacto() {
  return (
    <Layout>

        <h1>Contact</h1>
        <div>
            <p><span>Email:</span> <a className='enlaces' target="_blanck" rel="noreferrer" href=' mailto:dennishesler02@gmail.com '  > Send mail</a> </p>
            <p><span>Wp:</span> <a className='enlaces' target="_blanck"  rel="noreferrer"  href='https://wa.me/message/WDD56SX5KOI7I1'>WhatsApp</a></p>

            <p><span>Telegram:</span> @Dennish02</p>
        </div>
    </Layout>
  )
}
