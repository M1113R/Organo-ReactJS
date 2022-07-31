import './CampoTexto.css';

const CampoTexto = () => {
    return (
     <div className='campo-texto'>
        <label for="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome"/>
     </div>   
    )
}

export default CampoTexto;