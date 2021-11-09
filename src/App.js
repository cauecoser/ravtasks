import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import './App.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

// document.addEventListener('keypress', function(enter) {
//   if(enter.keyCode === 13) {
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
  
  const [show, setShow] = React.useState(true)

  return (<>
    <Topbar placeholder="Localizar Atividade"/>
    <div id='demais'>
      <Grupo tit_grupo="JAVASCRIPT"/>
      
      <div id='divbotao'>
        {
          show ?
          <Botao nomebotao="Novo Grupo +" onclick={()=>setShow(false)}/>: 
          <Input label={<Botao id='botaox' nomebotao='x' onclick={()=>setShow(true)}/>} labelPosition='right' id='inputdiv' placeholder='Nome do Grupo...'/>
        }
      </div> 
    </div>
  </>)
}

export default App