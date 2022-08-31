import React from 'react';
// Desde la versión 17 ya no es necesario importar react, solo para dar soporte a versiones antiguas
import logo from './logo.svg';
import './App.css';
import Componente from './components/components';
import ComponentFunction from './components/components';
import ComponentFunctExp from './components/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Componente msj="I'm a component from a class" />
        <ComponentFunction msj="I'm a component from a function" />
        <ComponentFunctExp msj="I'm a component from a expressed function" />
      </section>
    </div>
  );
}
export default App;
