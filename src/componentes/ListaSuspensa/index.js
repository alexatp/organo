import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
return (
    <div className='lista-suspensa'>
        <label htmlFor={props.idcampo}>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} id={props.idcampo} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
);
}

export default ListaSuspensa;