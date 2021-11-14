import React, { useState } from 'react'
import { Card, Input } from 'semantic-ui-react'
import './App.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

function App() {
  
  const [mostra, setMostra] = useState(true)
  const [colunaGrupo, setColunaGrupo] = useState([])

  function criaGrupo() {
    let tituloGrupo = ""
    document.addEventListener('keyup', function(tecla) {
      if(tecla.key === 'Enter') {
        tituloGrupo = document.querySelector('#inputdiv').value
        setColunaGrupo([colunaGrupo, <Grupo tit_grupo={tituloGrupo}/>])
        setTimeout(()=>{setMostra(true)},10)
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
            <Input onKeyUp={()=>criaGrupo()} label={<Botao nomebotao='x' onclick={()=>setMostra(true)}/>} labelPosition='right' id='inputdiv' placeholder='Nome do Grupo...' />
          }
        </div>
      </div>
  </>)
}

export default App