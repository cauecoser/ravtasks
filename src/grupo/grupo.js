import Botao from '../botao/botao'
import Card from '../card/card'
import './grupo.css'

function CriarCard() {
    alert('Você vai criar uma nova atividade!')
}
  
function Grupo (props) {
    return(
        <div id="fundo_grupo">
            <div id='tit_grupo'>
                {props.tit_grupo}
            </div>
            
            <div id='area_cards'>
                <Card/>
            </div>
            
            <div>
                <Botao nomebotao="Novo Card +" onclick={CriarCard}/> 
            </div>
        </div>
    )
}

export default Grupo