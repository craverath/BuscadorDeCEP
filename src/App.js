
import { FiSearch } from "react-icons/fi";
import './styles.css'


function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP..."></input>
      <button className="buttonSearch">
        <FiSearch size={25} color="#fff"/>
      </button>
      </div>

      <main className="main">
        <h2> CEP: 32110030</h2>
        <span>Rua Teste algum</span>
        <span>Complemento</span>
        <span> Bairro</span>
        <span> contagem - MG</span>
      </main>


    </div>
  );
}

export default App;
