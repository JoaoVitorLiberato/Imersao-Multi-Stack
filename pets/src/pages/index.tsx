import type { NextPage } from 'next'
import Titulo from '../ui/components/title/title'
import Lista from "../ui/components/list/list";

function MeuComponente(){
  return <div>Treina Web</div>
}

const Home: NextPage = () => {
  return (
    <div>
      <Titulo titulo="" subtitulo={
        <span>
          Com um pequeno valor mesal, você <br/>
          pode <strong>adotar um pet virtualmente</strong>.
        </span>
      }/>

      <Lista/>
      
    </div>
  )
}

export default Home
