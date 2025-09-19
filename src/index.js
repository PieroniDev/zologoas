import React from 'react';
import ReactDOM from 'react-dom/client';

// Cria um componente React simples
function App() {
  return <h1>Olá, Mundo!</h1>;
}

// Encontra a div 'root' no seu HTML
const rootElement = document.getElementById('root');

// Renderiza sua aplicação React dentro da div 'root'
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);