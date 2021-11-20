import {React, useState} from 'react'
import Botao from '../botao/botao'
import Card from '../card/card'
import './grupo.css'
import { Button, Form, Modal } from 'semantic-ui-react'

  
function Grupo (props) {
    var tarefa = ""
    var prazo= ""

    function criarTarefa() {
        tarefa = document.querySelector('#descricao_tarefa').value
        prazo = document.querySelector('#data_tarefa').value
        setOpen(false)
    }
   
    const [open, setOpen] = useState(false)
    
    return(<>
        <div id="fundo_grupo">
            <div id='tit_grupo'>
                {props.tit_grupo}
            </div>
            <div id='area_cards'>
                {props.cards_grupo.map(y=> {
                    return <Card texto_card={y.desc} prazo_card={y.data} /* onclick={()=>modificaAtividade()} */ />})}        
            </div>
            <div>
                <Botao nomebotao="Novo Card +" onclick={() => setOpen(!open)}/> 
            </div>
        </div>
    
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size={'mini'}>
        <Modal.Header>Configure a sua tarefa:</Modal.Header>
        <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Tarefa a ser realizada:</label>
                    <textarea id="descricao_tarefa" placeholder='Descreva a Tarefa'/>  
                </Form.Field>
                <Form.Field>
                    <label>Data limite para realização:</label>
                    <input id="data_tarefa" type="date" />
                </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>
                Cancelar
            </Button>
            <Button
                color='violet'
                content="Salvar Tarefa"
                labelPosition='right'
                icon='checkmark'
                onClick={() => criarTarefa()}
                />
        </Modal.Actions>
    </Modal>
    </>)
}

export default Grupo