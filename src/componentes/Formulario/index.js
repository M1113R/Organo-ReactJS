import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto name="Nome" type="text" placeholder="Digite seu nome" id="name"/>
                <CampoTexto name="Cargo" type="text" placeholder="Digite seu cargo" id="cargo"/>
                <CampoTexto name="Imagem" type="text" placeholder="Digite o endereço da imagem" id="imagem"/>
            </form>
        </section>
    )
}

export default Formulario