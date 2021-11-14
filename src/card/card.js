import React from 'react'
import './card.css'

function Card (props) {
    
    //------------------------------------------------------------
    // const [checked, setChecked] = React.useState(true);
    // var concluido = document.querySelector('#concluido')

    // if(checked) {
    //     alert('ficou verde')
    //     setChecked(true)
    // }
    //------------------------------------------------------------
    // var divprz = document.querySelector('#prazo')

    // if(checkb.checked) { 
        // divprz.style.backgroundColor = 'green'
    // } else if (new Date()<???????????) {
        // prz.style.backgroundColor = 'red'
    // }   
    //------------------------------------------------------------
    
    return(<>
        <div id='card'>
            <div id='texto'>
                {props.texto_card}
            </div>
            <div id='prazo'>
                <input type='checkbox' id="concluido"/*  checked={checked} onChange={() => setChecked(!checked)} *//>{props.prazo_card}
            </div>
        </div>
    </>)
}

export default Card