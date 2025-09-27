import { useState } from 'react';
import './App.css';
import Buscador from './components/buscador';
import Resultados from './components/resultados';
import logo from './img/centraldedeudores.png';
import Divisas from './components/divisas';

function App() {

  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <h1>🇦🇷Bienvenidos a Central de Deudores del BCRA🇦🇷</h1>
      <Divisas />
      <Buscador response={response} setResponse={setResponse} />
      <Resultados response={response} />
      <footer>
        <img className='logo' src={logo} alt='Logo de central de deudores' ></img>
        <p>Página desarrollada por <a href='https://github.com/bernardisApps'>Bernardis Apps</a></p>
      </footer>
    </div>
  );
}

export default App;
