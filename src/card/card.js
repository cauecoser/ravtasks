import './card.css'

function Card () {
    return(
        <form id="card">
            <fieldset><legend>Nova Atividade</legend>
                <p>Atividade: <input id='nome' type="text" placeholder="Digite a atividade"/></p>
                <p>Lembrete: <input id='data' type="date"/></p>
            </fieldset>
        </form>
    )
}

export default Card