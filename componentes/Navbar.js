import { useRouter } from "next/router"



const pasos = [
    {paso: 1, nombre: 'About', url:'/'},
    {paso: 2, nombre: 'Portfolio', url:'/portfolio'},
    {paso: 3, nombre: 'Contacto', url:'/contacto'},
]

const Navbar = () => {
    const router = useRouter()
   
  return (
    <>
        <div className="navbar">
            {pasos.map(paso => (
                <button key={paso.paso}
                className='navbarElemento'
                onClick={()=>{
                    router.push(paso.url)
                }}>
                    {paso.nombre}
                </button>
            ))}
        </div>
    </>
  )
}

export default Navbar