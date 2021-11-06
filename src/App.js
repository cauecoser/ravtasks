import './App.css'
import './reset.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

function CriarGrupo() {
  alert('Você vai criar um novo grupo!')
}

function App() {
  return (<>
    <Topbar placeholder="Localizar Atividade"/>
    <div id='demais'>
      <Grupo tit_grupo="JAVASCRIPT"/>
      <div id='divbotao'>
        <Botao nomebotao="Novo Grupo +" onclick={CriarGrupo}/>
      </div> 
    </div>
  </>)
}

export default App