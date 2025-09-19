// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './Pages/Home';
import AboutUsPage from './Pages/AboutUs';
import GalleryPage from './Pages/Gallery';
import QuizPage from './Pages/Quiz';
import CounterPage from './Pages/Counter';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutUsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/contador" element={<CounterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;