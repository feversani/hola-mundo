import logo from './logo.svg';
import './App.css';

import PricingContent from "./pages/Home"
function App() {
  return (
    <div className="App">
      {/* 
      <header className="App-header">
        <img src="https://eleconomista.com.ar/wp-content/uploads/2020/03/logo-banco-Galicia-1024x576.png" className="App-logo" alt="logo" />
        <p>
          Esta es una aplicación realizada para examen de selección de Banco Galicia
        </p>
        <a
          className="App-link"
          href="https://www.bancogalicia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página Web
        </a>
      </header>
    */}
      <PricingContent />
    </div>

  );
}

export default App;
