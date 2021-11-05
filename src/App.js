import { IoAlertSharp } from 'react-icons/io5'
import './App.css'
import Botao from './botao/botao'
import Card from './card/card'
import Grupo from './grupo/grupo'
import './reset.css'
import Topbar from './topbar/topbar'

function Alerta() {
  alert('Você vai criar um novo grupo!')
}

function App() {
  return (<>
    <Topbar placeholder="Localizar Atividade"/>
    <div id='demais'>
      <Grupo tit_grupo="JAVASCRIPT"/>
      <div id='divbotao'>
        <Botao nomebotao="Novo Grupo +" onclick={Alerta}/>
      </div> 
    </div>
  </>)
}

export default App