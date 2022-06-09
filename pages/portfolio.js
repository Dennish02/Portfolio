
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
            <h1>My Proyects</h1>
          <div className='contenedor-pages'>
              <div className='contenedor-pagesElemento'>
              <a href={bore} target="_blank" rel='norefer' >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/bore1.png'
                  />
              </a>
              <p>Boré Mobiliarios</p>
              </div>
              <div className='contenedor-pagesElemento'>
              <a href={nft} target="_blank" rel='norefer' >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/nft.png'
                  />
              </a>
              <p>NFT Market</p>
              </div>
              <div className='contenedor-pagesElemento'>
              <a href={paises} target="_blank" rel='norefer' >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/paises.png'
                  />
              </a>
              <p>Countries App</p>
              </div>
              <div className='contenedor-pagesElemento'>
              <a href={festival} target="_blank" rel='norefer' >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/festival.png'
                  />
              </a>   
              <p>Festival Mísica</p>
              </div>
              <div className='contenedor-pagesElemento'>
              <a href={blog} target="_blank" rel='norefer' >
                  <Image
                      width={384}
                      height={216}
                      src='/assets/image/cafe.png'
                  />
              </a>  
              <p>Blog Café</p>
              </div>
            
             
             
             
             
              
          </div>
      
        
       
    </Layout>
  )
}
