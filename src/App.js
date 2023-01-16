import fusca from '../src/assets/png/fusca.png';
import './App.css';

function App(meuCarro) {
  console.log(meuCarro.modelo);
  console.log(meuCarro.placa);
  console.log(meuCarro.cor);

  return (
    <div className="App">
      <header className="App-header">
        <img src={fusca} className="App-logo" alt="logo" />
        <h1>
          Modelo: {meuCarro.modelo}
        </h1>
        <p>
          Placa: {meuCarro.placa}
        </p>
        <small>
          Cor: {meuCarro.cor}
        </small>

      </header>
    </div>
  );
}

export default App;
