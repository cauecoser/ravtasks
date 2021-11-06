import './App.css'
import './reset.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

function CriarGrupo() {
  alert('Você vai criar um novo grupo!')
}

document.addEventListener('keypress', function(enter) {
  if(enter.keyCode === 13) {
      CriarAtividade()
  }
})

function CriarAtividade() {
  var texto_card = document.querySelector('#nome').value
  var prazo_card = document.querySelector('#data').value
  var card = {atividade: texto_card, prazo: prazo_card}
  alert('Atividade "'+card.atividade+'" criada com sucesso!')
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