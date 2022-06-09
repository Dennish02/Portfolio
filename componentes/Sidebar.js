
import Image from 'next/image'
export default function Sidebar() {
  return (
    <aside className='perfil'>
    <Image
    src='/assets/image/hesler.png'
    width={300}
    height={300}
    alt='Hesler Foto'
    />
    <div className='perfil-texto'>
        <h2>Hi there!</h2>
        <h3>I'm <span className='nombre'>Hesler Dennis</span></h3>
        <p className='carrera'>Full Stack Developer</p>
        <div className='ubicacion'>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#e1e1e1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p>Misiones, Argentina</p>
        </div>
        
    </div>
      <div className='iconos'>
        <a target="_blank" rel="noreferrer" href='https://github.com/Dennish02'>
        <i className="devicon-github-original icon "></i>
        </a>
      
      <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/dennishesler/' >
      <i class="devicon-linkedin-plain icon"></i>
      </a>
     
          
      </div>
      
      
    </aside>
  )
}
