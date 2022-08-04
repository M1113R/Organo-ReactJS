import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListeSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('Form foi submetido');
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos para cadastrar um funcionário.</h2>
                <CampoTexto required={true} name="Nome" type="text" placeholder="Digite seu nome" id="name"/>
                <CampoTexto required={true} name="Cargo" type="text" placeholder="Digite seu cargo" id="cargo"/>
                <CampoTexto required={true} name="Imagem" type="text" placeholder="Digite o endereço da imagem" id="imagem"/>
                <ListeSuspensa required={true} label="Time" itens={times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario