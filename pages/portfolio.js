import Image from 'next/image'
import Layout from '../layout/Layout'

export default function Portfolio() {
    const bore = 'https://boremobiliarios.vercel.app'
    const nft = 'https://inspiring-seahorse-c66785.netlify.app'
    const festival = 'https://festivalmusicagulpsass.netlify.app'
    const blog ='https://jds-blogcafe.netlify.app'
    const paises = 'https://www.linkedin.com/feed/update/urn:li:activity:6925549071818457088/'

    const proyectos = [
        {
            id: 6,
            nombre: '@react-native-country-iso-selector',
            url: 'https://www.npmjs.com/package/react-native-country-iso-selector',
            imagen: '/assets/image/iso-selector.png'
        },
        {
            id: 1,
            nombre: 'Boré Mobiliarios',
            url: bore,
            imagen: '/assets/image/bore1.png'
        },
        {
            id: 2,
            nombre: 'NFT Market',
            url: nft,
            imagen: '/assets/image/nft.png'
        },
        {
            id: 3,
            nombre: 'Festival Música',
            url: festival,
            imagen: '/assets/image/festival.png'
        },
        {
            id: 4,
            nombre: 'Blog Café',
            url: blog,
            imagen: '/assets/image/cafe.png'
        },
        {
            id: 5,
            nombre: 'Countries App',
            url: paises,
            imagen: '/assets/image/paises.png'
        },
    ]
  return (
    <Layout>
            <h1>My Projects</h1>
          <div className='contenedor-pages'>
              
                {proyectos.map((proyecto, index) => (
                    <div key={`${index}-${proyecto?.id}`} className='contenedor-pagesElemento'>

                    <a className='enlace' target="_blank"  rel="noreferrer" href={proyecto?.url}  >
                        <Image
                            objectFit='cover'
                            width={384}
                            height={216}
                            src={proyecto?.imagen}
                        />
                    </a>
                    <p className='subtitulo'>{proyecto?.nombre}</p>
                    </div>
                ))}
          </div>
      
        
       
    </Layout>
  )
}
