import Botao from '../botao/botao'
import Card from '../card/card'
import './grupo.css'

function Alerta() {
    alert('Você vai criar uma nova atividade!')
}
  
function Grupo (props) {
    return(
        <div id="fundo_grupo">
            <div id='tit_grupo'>
                {props.tit_grupo}
            </div>
            <div id='area_cards'>
                <Card texto_card="Realizar Check List de cliente."/>
                <Card texto_card="Realizar Check List de cliente."/>
            </div>
            <div>
                <Botao nomebotao="Novo Card +" onclick={Alerta}/> 
            </div>
        </div>
    )
}

export default Grupo