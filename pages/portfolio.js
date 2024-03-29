
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../layout/Layout'

export default function Portfolio() {
    const bore = 'https://www.boremobiliarios.com'
    const nft = 'https://inspiring-seahorse-c66785.netlify.app'
    const festival = 'https://festivalmusicagulpsass.netlify.app'
    const blog ='https://jds-blogcafe.netlify.app'
    const paises = 'https://www.linkedin.com/feed/update/urn:li:activity:6925549071818457088/'
  return (
    <Layout>
            <h1>My Projects</h1>
          <div className='contenedor-pages'>
              <div className='contenedor-pagesElemento'>

              <a className='enlace' target="_blank"  rel="noreferrer" href={bore}  >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/bore1.png'
                  />
              </a>
              <p className='subtitulo'>Boré Mobiliarios</p>
              </div>
              <div className='contenedor-pagesElemento'>
              <a className='enlace' target="_blank" rel="noreferrer" href={nft}  >

                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/nft.png'
                  />
              </a>
              <p className='subtitulo'>NFT Market</p>
              </div>
              <div className='contenedor-pagesElemento'>

              <a className='enlace' target="_blank" rel="noreferrer" href={paises}  >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/paises.png'
                  />
              </a>
              <p className='subtitulo'>Countries App</p>
              </div>
              <div className='contenedor-pagesElemento'>

              <a className='enlace' target="_blank" rel="noreferrer" href={festival}  >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/festival.png'
                  />
              </a>   
              <p className='subtitulo'>Festival Música</p>
              </div>
              <div className='contenedor-pagesElemento'>

              <a className='enlace' target="_blank" rel="noreferrer" href={blog}  >

                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/cafe.png'
                  />
              </a>  
              <p className='subtitulo'>Blog Café</p>
              </div>
            
             
             
             
             
              
          </div>
      
        
       
    </Layout>
  )
}
