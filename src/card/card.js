import './card.css'

function Card (props) {
    return(
        <div id='card'>
            {props.texto_card}
        </div>
    )
}

export default Card