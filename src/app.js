import React from 'react';
import Header from '../components/Header'; // Importa o Header
import Footer from '../components/Footer'; // Importa o Footer

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Bem-vindo à Página Principal!</h2>
        <p>Aqui você pode começar a adicionar o conteúdo principal do seu site.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;