import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
     <div className='campo-texto'>
        <label for={props.id}>{props.name}</label>
        <input type={props.type} id={props.id} placeholder={`${props.placeholder}...`}/>
     </div>   
    )
}

export default CampoTexto;