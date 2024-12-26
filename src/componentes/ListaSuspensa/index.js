import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
return (
    <div className='lista-suspensa'>
        <label htmlFor={props.idcampo}>{props.label}</label>
        <select id={props.idcampo}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
);
}

export default ListaSuspensa;