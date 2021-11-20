import React from 'react'
import './card.css'

function Card (props) {
    
    return(<>
        <div id='card' draggable onClick={props.onclick}>
            <div id='texto'>
                {props.texto_card}
            </div>
            <div id='prazo'>
                <input type='checkbox' id="concluido"/>{props.prazo_card}
            </div>
        </div>
    </>)
}

export default Card