import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto name="Nome" type="text" placeholder="Digite seu nome" id="name"/>
      <CampoTexto name="Cargo" type="text" placeholder="Digite seu cargo" id="cargo"/>
      <CampoTexto name="Imagem" type="text" placeholder="Digite o endereço da imagem" id="imagem"/>
    </div>
  );
}

export default App;