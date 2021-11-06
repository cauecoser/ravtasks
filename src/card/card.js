import './card.css'

function Card () {
    // let texto_card = null
    return(
        <input id='card' placeholder="Digite a atividade..." onClick={EditarAtividade}/>
    )
}

function EditarAtividade() {
    // var tecto_card = document.querySelector('input#card').value    
    alert('Você está editando a atividade!')
}

export default Card