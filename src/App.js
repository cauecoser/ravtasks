import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import './App.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

// document.addEventListener('keypress', function(tecla) {
//   if(tecla.keyCode === 13) {
//       CriarAtividade()
//   }
// })

// function CriarAtividade() {
//   var texto_card = document.querySelector('#nome').value
//   var prazo_card = document.querySelector('#data').value
//   var card = {atividade: texto_card, prazo: prazo_card}
//   alert('Atividade "'+card.atividade+'" criada com sucesso!')
// }

function App() {
  
  const [mostra, setMostra] = useState(true)

  const [colunaGrupo, setColunaGrupo] = useState([])

  function meteColuna() {
    let tituloGrupo = ""
    document.addEventListener('keyup', function(tecla) {
      if(tecla.key === 'Enter') {
        tituloGrupo = document.querySelector('#inputdiv').value
        setColunaGrupo(fcoluna => [...fcoluna,<Grupo tit_grupo={tituloGrupo}/>])  
      }
    })
  }


  return (<>
    <Topbar placeholder="Localizar Atividade"/>
      <div id='demais'>
        {colunaGrupo}
        <div id='divbotao'>
          {
            mostra ?
            <Botao nomebotao="Novo Grupo +" onclick={()=>setMostra(false)}/>: 
            <Input onKeyUp={()=>meteColuna()} label={<Botao nomebotao='x' onclick={()=>setMostra(true)}/>} labelPosition='right' id='inputdiv' placeholder='Nome do Grupo...' />
          }
        </div>
      </div>
  </>)
}

export default App