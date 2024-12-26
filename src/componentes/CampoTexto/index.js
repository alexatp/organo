import './CampoTexto.css'

const CampoTexto = (props) => {  
    return (
        <div className="campo-texto">
            <label htmlFor={props.idcampo} >{props.label}</label>
            <input required={props.obrigatorio} id={props.idcampo} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;  