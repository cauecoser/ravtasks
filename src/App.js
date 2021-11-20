import React, { useState } from 'react'
import { Card, Input } from 'semantic-ui-react'
import './App.css'
import Botao from './botao/botao'
import Grupo from './grupo/grupo'
import Topbar from './topbar/topbar'

function App() {
  
  var estrutura = [{titulo: "TÍTULO1",
                    cards:[{desc:"TAREFA1 T1",
                            data:"DATA1 T1"
                           },
                           {desc:"TAREFA2 T1",
                            data:"DATA2 T1"
                           }
                          ]
                    },
                    {titulo: "TÍTULO2",
                     cards:[{desc:"TAREFA1 T2",
                            data:"DATA1 T2"
                           },
                           {desc:"TAREFA2 T2",
                            data:"DATA2 T2"
                           }
                          ]
                    }
                  ]


  const [mostra, setMostra] = useState(true)
  // const [colunaGrupo, setColunaGrupo] = useState([])
  

  function criaGrupo() {
    // let tituloGrupo = ""
    document.addEventListener('keyup', function(tecla) {
      if(tecla.key === 'Enter') {
        // tituloGrupo = document.querySelector('#inputdiv').value
                                    
        setTimeout(()=>{setMostra(true)},10)
      }
    })
  }


  

  return (<>
    <Topbar placeholder="Localizar Atividade"/>
      <div id='demais'>
        {estrutura.map(x => {return <Grupo tit_grupo={x.titulo} cards_grupo={x.cards}/>})}
        <div id='divbotao'>
          {
            mostra ?
            <Botao nomebotao="Novo Grupo +" onclick={()=>setMostra(false)}/>: 
            <Input onKeyUp={()=>criaGrupo()} label={<Botao nomebotao='x' onclick={()=>setMostra(true)}/>} labelPosition='right' id='inputdiv' placeholder='Nome do Grupo' />
          }
        </div>
      </div>
  </>)
}

export default App