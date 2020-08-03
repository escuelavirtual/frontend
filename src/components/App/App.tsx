import React from 'react';
import AuthState from "../../contexts/authState";
import './style.scss';

function App() {
  return (
    <AuthState>
      <div className="App">
        <header className="App-header">
          <p>
            Este es el codigo del proyecto de <strong>Escuela virtual</strong> por ahora nos encontamos trabajando en la app
          </p>
          <code>
            Hola mundo
          </code>
          <a
            className="escuelaDigitalGitHub"
            href="https://github.com/escuelavirtual"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en github
          </a>
        </header>
      </div>
    </AuthState>
  );
}

export default App;
