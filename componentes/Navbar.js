import { useRouter } from "next/router"



const pasos = [
    {paso: 1, nombre: 'About', url:'/'},
    {paso: 2, nombre: 'Portfolio', url:'/portfolio'},
    {paso: 3, nombre: 'Contacto', url:'/contacto'},
]
let seleccionado;
const Navbar = () => {
    const router = useRouter()
   
  return (
    <>
        <div className="navbar">
            {pasos.map(paso => (
                <p key={paso.paso}
                className= {`${seleccionado === paso.paso ? 'seleccionado': 'navbarElemento'} `}
                onClick={()=>{
                    router.push(paso.url)
                    seleccionado = paso.paso
                }}>
                    {paso.nombre}
                </p>
            ))}
        </div>
    </>
  )
}

export default Navbar