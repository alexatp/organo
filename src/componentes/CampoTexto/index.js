import './CampoTexto.css'

const CampoTexto = (props) => {  
    return (
        <div className="campo-texto">
            <label for={props.idcampo} >{props.label}</label>
            <input id={props.idcampo} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;  