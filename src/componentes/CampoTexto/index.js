import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
     <div className='campo-texto'>
        <label>{props.name}</label>
        <input required={props.required} type={props.type} id={props.id} placeholder={`${props.placeholder}...`}/>
     </div>   
    )
}

export default CampoTexto;