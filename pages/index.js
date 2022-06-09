
import Image from 'next/image'
import About from '../componentes/About'
import Layout from '../layout/Layout'


export default function Home() {
  return (
    <div>
      <Layout>
        <About/>
      </Layout>
    </div>
  )
}
