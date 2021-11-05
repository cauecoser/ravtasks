import './botao.css'

function Botao(props) {
    return(<button id="botao_gen" onClick={props.onclick}>{props.nomebotao}</button>)
}

export default Botao