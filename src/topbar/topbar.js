import './topbar.css'
import {GrFormSearch} from 'react-icons/all'
import {BsBellFill} from 'react-icons/all'


function Topbar(props) {
    return (
        <div id='topo'>
            <div id='fundo_pesquisa'>
                <input id="pesq_tarefa" placeholder={props.placeholder}/>
                <GrFormSearch size={25} color="rgb(0,0,0)"/>
            </div>
                <BsBellFill size={25} color="rgb(0,0,0)"/>
        </div>
    )
}


export default Topbar