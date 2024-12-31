import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const [valor, setValor] = useState('');

    const placeholderModificada = `${props.placeholder}...`
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.idcampo} >{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                id={props.idcampo}
                placeholder={placeholderModificada
                } />
        </div>
    )
}

export default CampoTexto;  