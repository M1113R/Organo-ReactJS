import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (event) => {
       props.aoAlterado(event.target.value);
    }

    return (
     <div className='campo-texto'>
        <label>{props.name}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.required} type={props.type} id={props.id} placeholder={`${props.placeholder}...`}/>
     </div>   
    )
}

export default CampoTexto;