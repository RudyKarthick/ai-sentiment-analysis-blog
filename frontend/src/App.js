import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>AI Sentiment Analysis</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/analyze">Analyze</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Sentiment AI. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
